import React from 'React';
import { shallow } from 'enzyme';
import ImageContentItem from './ImageContentItem';


describe("ImageContentItem should", () => {
    it("render an image with alt text", () => {
        const wrapper = shallow(<ImageContentItem title={"A_TITLE"} src={"AN_SRC"} />);

        const image = wrapper.find("img");

        expect(image.prop("src")).toEqual("AN_SRC");
        expect(image.prop("alt")).toEqual("A_TITLE");
    });
})