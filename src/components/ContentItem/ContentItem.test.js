import React from 'React';
import { shallow } from 'enzyme';
import ContentItem from './ContentItem';
import YoutubeContentItem from './YoutubeContentItem';
import ImageContentItem from './ImageContentItem';


describe("ContentItem should", () => {
    it("render youtube content item if youtube is specified", () => {
        const wrapper = shallow(<ContentItem type={"youtube"} title={"A_TITLE"} thumbnail={"A_THUMBNAIL"} src={"AN_SRC"} />);
        const props = wrapper.find(YoutubeContentItem).props();

        expect(props.title).toEqual("A_TITLE");
        expect(props.thumbnail).toEqual("A_THUMBNAIL");
        expect(props.src).toEqual("AN_SRC");
    });

    it("render image content item if image is specified", () => {
        const wrapper = shallow(<ContentItem type={"image"} title={"A_TITLE"} src={"AN_SRC"} />);
        const props = wrapper.find(ImageContentItem).props();

        expect(props.title).toEqual("A_TITLE");
        expect(props.src).toEqual("AN_SRC");
    });

    it("not render anything for an unsupported content type", () => {
        const wrapper = shallow(<ContentItem type={"UNSUPPORTED_TYPE"} />);

        expect(wrapper.html()).toBeNull();
    });
})