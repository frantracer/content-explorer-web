import os
import sys
import subprocess
import argparse

# GLOBAL CONSTANTS

web_name = "content-explorer-web"

container_config_path = "/etc/linkurator/config"
container_workdir = "/usr/src/app"

web_image_tag = "%s:latest" % (web_name,)

# GLOBAL VARIABLES

dry_run = False

web_container_name = ""

# FUNCTIONS

def perror(message):
    print >> sys.stderr, "[ERROR] " + message
    exit(1)

def run_command(cmd):
    if (dry_run):
        print " ".join(cmd)
    else:
        try:
            subprocess.check_call(cmd, stderr=subprocess.STDOUT)
        except subprocess.CalledProcessError as e:
            perror(e.output)

def count_containers(container):
    docker_ps = subprocess.Popen(["sudo", "docker", "ps", "-qa", "--filter", "name=^%s$" % (container,)], stdout=subprocess.PIPE)
    return int(subprocess.check_output(["wc", "-l"], stdin=docker_ps.stdout))

def count_images(image):
    docker_images = subprocess.Popen(["sudo", "docker", "images", "-q", "--filter", "reference=%s" % (image,)], stdout=subprocess.PIPE)
    return int(subprocess.check_output(["wc", "-l"], stdin=docker_images.stdout))

def rebuild_web_container():
    print "\n# WEB CONTAINER"

    # Remove containers
    print "\n## REMOVE PREVIOUS CONTAINER\n"

    ps_count = count_containers(web_container_name)

    if(ps_count == 1):
        run_command(["sudo", "docker", "rm", "-f", web_container_name])

    # Remove images
    print "\n## REMOVE PREVIOUS IMAGE\n"

    images_count = count_images(web_image_tag)

    if(images_count == 1):
        run_command(["sudo", "docker", "rmi", "-f", web_image_tag])

    # Create images
    print "\n## BUILD NEW IMAGE\n"

    run_command(["sudo", "docker", "build", "-t", web_image_tag, "."])

    # Create containers
    print "\n## CREATE NEW CONTAINER\n"

    if(env == "DEV"):
        run_command(["sudo", "docker", "create", "-it", "-p", "8443:443",
        "--name", web_container_name, "-v", "%s:%s" % (config_path, container_config_path),
        "-v", "%s:%s" % (os.getcwd(), container_workdir), web_image_tag, "/bin/sh"])

    elif(env == "PRO"):
        run_command(["sudo", "docker", "run", "-d", "-p", "8443:443", "--name",
        web_container_name, "-v", "%s:%s" % (config_path, container_config_path), web_image_tag])
    
# MAIN

# Arguments parsing
parser = argparse.ArgumentParser(description='Script to deploy the project')
parser.add_argument('--env', choices=['DEV', 'PRO'], required=True,
                    help='Environment to deploy')
parser.add_argument('--config', required=True,
                    help='Path the directory that contains the configuration files')
parser.add_argument('--dry-run', action='store_true',
                    help='Display commands that will be executed without executing them')

args = parser.parse_args()

env = args.env
config_path = os.path.abspath(args.config)
dry_run = args.dry_run

web_container_name = web_name + "-" + env

# Check configuration directory

if (os.path.isdir(config_path)):
    if (not os.path.exists(config_path + "/web.env")):
        perror("Configuration file web.env does not exist")
    if (not os.path.exists(config_path + "/cert.pem")):
        perror("Certificate file cert.pem does not exist")
    if (not os.path.exists(config_path + "/key.pem")):
        perror("Private key file key.pem does not exist")
else:
    perror("Configuration directory does not exist")

# Web Container
run_command(["cp", "-f", "%s/web.env" % (config_path,), ".env"])

rebuild_web_container()


if (env == "DEV"):
    print "\n\
Run the following commands:\n\
sudo docker start -i %s\n\
npm install\n\
less-watch-compiler src/less/ src/ --main-file app.less &\n\
npm start\n" % (web_container_name,)
