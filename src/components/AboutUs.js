import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutDiv>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661776529978-0ea90437970a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29tYnVjaGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div>
        Do eu aute voluptate enim ex tempor reprehenderit non. Ea ad est laborum
        sint. Ipsum veniam commodo do do. Ullamco dolor cupidatat esse sit.
        Nulla quis in et culpa tempor culpa ea proident sunt. Ea anim qui qui
        culpa anim cillum commodo aliquip exercitation. Consequat quis id ea ut
        mollit eiusmod labore consequat sit minim in.Veniam ea do aliqua velit
        pariatur eu magna voluptate labore aliquip officia dolor laborum. Culpa
        cillum irure eiusmod sunt amet ullamco dolore. Ullamco aliquip consequat
        eiusmod labore. Ullamco officia mollit veniam eu fugiat in nostrud ad
        velit id ea. Officia exercitation sint sunt ipsum irure excepteur
        excepteur dolor duis Lorem. In consequat reprehenderit exercitation
        consectetur incididunt commodo ex ullamco ipsum ut enim sunt. Elit duis
        exercitation dolore tempor ad culpa fugiat laborum minim fugiat nisi
        sint do.Qui nostrud officia officia cupidatat eu duis dolor nostrud. Ex
        consequat dolore nostrud ipsum elit culpa ut sit eiusmod anim
        consectetur. Ullamco est in labore non tempor do tempor ullamco esse
        ipsum cupidatat. Duis duis consequat voluptate in occaecat voluptate
        anim exercitation. Fugiat commodo exercitation veniam sit aute minim
        magna ad consectetur deserunt.
      </div>
    </AboutDiv>
  );
  const AboutDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    padding: 10px, 30px;
  `;
};
export default AboutUs;
