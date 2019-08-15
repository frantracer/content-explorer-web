import React from 'React';
import { shallow } from 'enzyme';
import YoutubeContentItem from './YoutubeContentItem';


describe("YoutubeContentItem should", () => {
    it("render a thumbnail image with alt text", () => {
        const wrapper = shallow(<YoutubeContentItem thumbnail={"A_THUMBNAIL"} title={"A_TITLE"} />);

        const image = wrapper.find("img");

        expect(image.prop("src")).toEqual("A_THUMBNAIL");
        expect(image.prop("alt")).toEqual("A_TITLE");
    });

    it("have a link pointing to src", () => {
        const wrapper = shallow(<YoutubeContentItem src={"AN_SRC"} />);

        const link = wrapper.find("a");

        expect(link.prop("href")).toEqual("AN_SRC");
    });

    it("have a title", () => {
        const wrapper = shallow(<YoutubeContentItem title={"A_TITLE"} />);

        const title = wrapper.find("b");

        expect(title.text()).toEqual("A_TITLE");
    });
})