import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/auth_context.js";
const AboutUs = () => {
  const { authIsReady } = useAuthContext();
  const AboutDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px 75px;
    @media screen and (min-width: 1200px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 10vw auto;
    }
    @media screen and (min-width: 1000px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    .col-1 {
      @media screen and (min-width: 1000px) {
        min-width: 50%;
      }
      @media screen and (min-width: 1200px) {
        min-width: 30%;
      }
    }
    img {
      /* @media screen and (min-width: 800px) {
        height: 25em;
        max-width: 75%;
        object-fit: cover;
      } */
      @media screen and (min-width: 1000px) {
        height: 35em;
        max-width: 75%;
        object-fit: cover;
      }
      @media screen and (min-width: 1200px) {
        height: 35em;
        max-width: 100%;
        object-fit: cover;
      }
      @media screen and (min-width: 1500px) {
        height: 35em;
        max-width: 80%;
        object-fit: cover;
      }
      /* NOTE this is a good way to hide an element on smaller screens */
      @media only screen and (max-width: 525px) {
        display: none;
      }
      height: 20em;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
      box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
    }
    .text {
      @media screen and (min-width: 1200px) {
        max-width: 40%;
      }
      @media screen and (min-width: 1000px) {
        max-width: 50%;
      }
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      padding-top: 5em;
      max-width: 80ch;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-indent: 50px;
      height: 35em;
    }
  `;
  return (
    <>
      {authIsReady && (
        <AboutDiv>
          <div className="col-1">
            <img src="https://plus.unsplash.com/premium_photo-1661776529978-0ea90437970a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29tYnVjaGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="text">
            <h2>Discover the life changing benefits of fermented tea</h2>
            <span>
              Do eu aute voluptate enim ex tempor reprehenderit non. Ea ad est
              laborum sint. Ipsum veniam commodo do do. Ullamco dolor cupidatat
              esse sit. Nulla quis in et culpa tempor culpa ea proident sunt. Ea
              anim qui qui culpa anim cillum commodo aliquip exercitation.
              Consequat quis id ea ut mollit eiusmod labore consequat sit minim
              in.Veniam ea do aliqua velit pariatur eu magna voluptate labore
              aliquip officia dolor laborum. Culpa cillum irure eiusmod sunt
              amet ullamco dolore. Ullamco aliquip consequat eiusmod labore.
              Ullamco officia mollit veniam eu fugiat in nostrud ad velit id ea.
              Officia exercitation sint sunt ipsum irure excepteur excepteur
              dolor duis Lorem. In consequat reprehenderit exercitation
              consectetur incididunt commodo ex ullamco ipsum ut enim sunt. Elit
              duis exercitation dolore tempor ad culpa fugiat laborum minim
              fugiat nisi sint do.Qui nostrud officia officia cupidatat eu duis
              dolor nostrud. Ex consequat dolore nostrud ipsum elit culpa ut sit
              eiusmod anim consectetur. Ullamco est in labore non tempor do
              tempor ullamco esse ipsum cupidatat. Duis duis consequat voluptate
              in occaecat voluptate anim exercitation. Fugiat commodo
              exercitation veniam sit aute minim magna ad consectetur deserunt.
            </span>
          </div>
        </AboutDiv>
      )}
    </>
  );
};
export default AboutUs;
