import styled from "styled-components";

export const HeaderImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

export const FadeOutContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 59.01%;
  -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  overflow: hidden;
  opacity: 0.3;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -10%;
    width: 100%;
    height: 50%;
    background: linear-gradient(transparent, rgb(0, 9, 19) 70%);
  }
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  left: -5%;
  top: -5%;
  width: 110%;
  height: 110%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(8px);
  object-fit: cover;
  object-position: center 20%;
`;

export const HeaderSection = styled.section`
  position: relative;
  // min-height: 75vh;
  padding: 30px 0px 75px;
  background: rgb(0, 9, 19);
`;

export const FieldSet = styled.fieldset`
  position: relative;
  border: 1px solid #333a42;
  margin: -5.625rem 3rem 0px;

  .title {
    text-align: center;
  }

  .padded-box {
    padding: 3.75rem;
  }
`;

export const Legend = styled.legend`
  display: block;
  text-transform: uppercase;
  font-style: italic;
  color: white;
  line-height: 1.1;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  width: auto;
  margin-bottom: 0;

  span.name {
    padding: 0px 15px 10px;
    font-size: 114px;
    font-family: serif;
    letter-spacing: 0.03em;
  }
`;

export const BoxBottomDecoration = styled.div`
  border-top: 1px solid #333a42;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem 3.75rem !important;
  white-space: nowrap;
  font-size: 0.625rem;

  p,
  li {
    margin: 0px 1.25rem;
    text-transform: uppercase;
  }

  p {
    letter-spacing: 0.2em;
    color: rgb(93, 97, 102);
  }

  li {
    letter-spacing: 0.15em;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
  }
`;

export const Dificulty = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin: 0px auto;

  > span {
    display: block;
    width: 50px;
    position: absolute;
    top: 20px;
    height: 10px;
  }

  .reactangles-container {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0px 8% 0px 5%;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .rectangle {
    display: inline-block;
    width: 30.6667%;
    height: 100%;
    padding-right: 4%;
    opacity: 1;
    background-color: rgb(8, 215, 247);
    background-clip: content-box;
    transform: skewX(-40deg);
  }

  .rectangle:last-child {
    padding-right: 0px;
    opacity: 0.2;
  }
`;

export const SectionTitleContainer = styled.div`
  width: 60px;
  position: absolute;
  left: 0;
  top: 20rem;

  > div {
    z-index: 10;
    position: relative;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .title {
    padding-top: 75%;
    transform: rotate(-90deg) translate(-100%, -50%);
    transform-origin: left top;
    white-space: nowrap;
    color: white;
    font-size: 0.625rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;

    &::after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 1.4em;
      height: 1px;
      margin-left: 0.5em;
      background-color: currentcolor;
    }
  }
`;

export const HabilitiesSection = styled.div`
  position: relative;
  padding: 75px 0px 15rem;

  h2 {
    text-transform: uppercase;
    font-style: italic;
  }

  > div {
    display: flex;
    width: 100%;
    height: 100%;

    .content {
      flex: 1 1 100%;
      min-width: 0px;

      .section-inner {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        display: flex;
        max-width: 2040px;
        padding: 0px 60px 0px 0px;

        .selector-wrapper {
          flex: 2 1 120%;
          padding-top: 5.625rem;

          .wrapper {
            width: 100%;

            .wrapper-inner {
              position: relative;
              width: 100%;
              display: flex;

              .side-fill {
                flex: 1 1 auto;
                position: relative;

                .base-line-left {
                  right: 0px;
                  min-width: 120px;
                  position: absolute;
                  bottom: 16.5px;
                  left: 0px;
                  width: 100%;
                  height: 1px;
                  background-color: rgb(57, 64, 72);
                }

                .base-line-right {
                  position: absolute;
                  bottom: 16.5px;
                  left: 0px;
                  width: 100%;
                  height: 1px;
                  background-color: rgb(57, 64, 72);
                }
              }

              .option-list {
                position: relative;
                display: inline-flex;

                h2 {
                  text-transform: uppercase;
                  font-style: italic;
                  position: absolute;
                  left: 15px;
                  bottom: calc(100%);
                  margin-top: 0px;
                  margin-bottom: 40px;
                  color: rgb(255, 255, 255);
                  letter-spacing: 0.05em;
                  font-family: "Beaufort for LOL", serif;
                  font-weight: 800;
                  font-size: 3.75rem;
                }

                .ability-info {
                  position: absolute;
                  top: 100%;
                  left: 2.8125rem;
                  right: 0px;
                  color: rgb(255, 255, 255);

                  ol {
                    list-style: none;
                    padding: 0px;
                    position: relative;
                    margin: 1.875rem 0px 0px;

                    li {
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      pointer-events: none;
                      opacity: 1;

                      h6 {
                        text-transform: uppercase;
                        line-height: 1.1;
                        margin-top: 0px;
                        font-size: 0.625rem;
                        line-height: 1;
                        font-weight: normal;
                        letter-spacing: 0.15em;
                        color: rgb(126, 126, 126);
                      }

                      h5 {
                        text-transform: uppercase;
                        margin-top: 0.375rem;
                        font-size: 1.125rem;
                        line-height: 1.11111;
                        font-weight: 700;
                        letter-spacing: 0.05em;
                      }

                      p {
                        margin-top: 0.375rem;
                        font-size: 0.875rem;
                        line-height: 1.4;
                        letter-spacing: 0.05em;
                      }
                    }
                  }
                }

                .base-line {
                  z-index: 100;
                  position: absolute;
                  bottom: 16.5px;
                  left: 0px;
                  width: 100%;
                  height: 1px;
                  background-color: transparent;

                  .baseline-knob {
                    position: absolute;
                    z-index: 0;
                    box-sizing: border-box;
                    width: 20px;
                    height: 20px;
                    margin: -10px 0px 0px -10px;
                    will-change: left;
                    transition: left 600ms cubic-bezier(0.215, 0.61, 0.355, 1)
                      0s;
                    border: 2px solid currentcolor;
                    border-radius: 100%;
                    color: rgb(208, 168, 92);

                    .bullet {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      display: block;
                      width: 9px;
                      height: 9px;
                      background-color: currentcolor;
                      border-radius: 50%;
                      transition: color 300ms ease 0s;
                    }
                  }
                }

                button {
                  outline: none;
                  flex: 1 1 auto;
                  display: flex;
                  flex-direction: column;
                  -webkit-box-align: stretch;
                  align-items: stretch;
                  padding: 12px;
                  border: 0px;
                  background-color: transparent;
                  color: rgb(57, 64, 72);
                  cursor: pointer;
                  appearance: button;
                  text-transform: none;
                  overflow: visible;
                  font-family: inherit;
                  font-size: 100%;
                  line-height: 1.15;
                  margin: 0px;

                  .option-icon {
                    position: relative;
                    display: block;
                    width: 70px;
                    height: 70px;
                    margin: 0px auto 10px;

                    .option-icon-content {
                      z-index: 10;
                      position: absolute;
                      top: 5px;
                      left: 5px;
                      width: 60px;
                      height: 60px;
                      transform: translateY(20px) scale(1, 1);
                      will-change: transform;
                      transform-origin: center bottom;

                      > * {
                        width: 100%;
                        height: 100%;
                        fill: rgb(57, 64, 72);
                        transition: fill 0.15s ease-in-out 0s;
                        border-style: none;
                      }
                    }

                    .option-icon-border {
                      left: -1px;
                      top: -1px;
                      width: 100%;
                      height: 100%;
                      transition: opacity 200ms ease 0s;
                      position: absolute;

                      .container {
                        width: 100%;
                        height: 100%;
                        fill: rgb(208, 168, 92);
                        position: absolute;
                        inset: 1px;
                        pointer-events: none;

                        svg {
                          z-index: 10;
                          fill: none;
                          position: absolute;
                          display: block;
                          width: 74px;
                          height: 74px;
                          left: -2px;
                          top: -2px;
                        }
                      }
                    }
                  }

                  .option-line {
                    display: block;
                    width: 1px;
                    height: 20px;
                    margin: 0px auto;
                    background-color: rgb(208, 168, 92);
                    opacity: 0;
                    transform: scaleY(0);
                    will-change: transform;
                    transform-origin: center bottom;
                  }

                  .option-bullet-container {
                    display: block;
                    position: relative;
                    width: calc(100% + 24px);
                    margin-top: 5.5px;
                    margin-left: -12px;
                    z-index: 1;

                    &::before {
                      content: "";
                      position: absolute;
                      bottom: 4.5px;
                      width: 50%;
                      height: 1px;
                      background-color: currentcolor;
                      z-index: -1;
                      transition: width 0ms ease 0ms;
                      left: 0px;
                    }

                    &::after {
                      content: "";
                      position: absolute;
                      bottom: 4.5px;
                      width: 50%;
                      height: 1px;
                      background-color: currentcolor;
                      z-index: -1;
                      transition: width 0ms ease 0ms;
                      right: 0px;
                    }

                    .bullet {
                      opacity: 1;
                      transition: opacity 240ms ease 360ms;
                      margin: 0px auto;
                      display: block;
                      width: 9px;
                      height: 9px;
                      background-color: currentcolor;
                      border-radius: 50%;
                    }
                  }
                }
              }
            }
          }
        }

        .preview-wrapper {
          box-sizing: border-box;
          width: 100%;
          flex: 1 1 100%;
          padding-top: 3.75rem;

          .wrapper {
            width: 100%;

            .wrapper-inner {
              position: relative;
              width: 100%;
              padding-top: 56.25%;

              .video-container {
                position: absolute;
                inset: 0px;

                .video-wrapper {
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                  opacity: 1;
                  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1)
                    300ms;

                  .wrapper {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    z-index: 0;

                    video {
                      object-fit: cover;
                      object-position: center center;
                      position: relative;
                      z-index: 0;
                      width: 100%;
                      height: 100%;
                    }
                  }
                }

                .container {
                  position: absolute;
                  inset: 1px;
                  pointer-events: none;
                  z-index: 1;

                  svg {
                    fill: none;
                    opacity: 0.35;
                    stroke: white;
                    height: calc(100% + 24px);
                    left: 8px;
                    top: -12px;
                    width: calc(100% - 16px);
                    position: absolute;
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .background-icon {
    position: absolute;
    inset: -1px 0px 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(0, 9, 19);
  }

  svg {
    height: calc(100% - 30px);
    fill: rgb(7, 18, 26);
  }
`;

export const SkinSection = styled.section`
  position: relative;

  > div {
    display: flex;
    width: 100%;
    height: 100%;

    .content {
      flex: 1 1 100%;
      min-width: 0px;
      box-sizing: border-box;
      padding: 0px 60px;

      .display-container {
        max-width: 97.5rem;
        position: relative;
        margin: 5% auto;

        .slideshow-area {
          z-index: 10;
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 25vw;
          min-width: 400px;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          flex-direction: column;

          h2 {
            font-family: "Beaufort for LOL", serif;
            text-transform: uppercase;
            font-style: italic;
            letter-spacing: 0.05em;
            font-weight: bold;
            color: white;
            padding: 20px;
            margin: 40px 40px 0px;
            font-size: 40px;
            border-bottom: 1px solid rgba(193, 193, 193, 0.2);
          }

          .carrousel-wrapper {
            flex: 1 1 auto;
            width: calc(100% + 15px);
            overflow: hidden;

            ul {
              margin-top: -20vw !important;
              width: 100%;
              height: calc(100% + 20vw);
              display: flex;
              flex-direction: column;
              margin: 0px;
              padding: 0px;
              list-style: none;

              .swiper-container {
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                list-style: none;
                padding: 0px;
                z-index: 1;
                width: 100%;
                height: 100%;

                .swiper-wrapper {
                  transition-duration: 500ms;
                  flex-direction: column;
                  position: relative;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  display: flex;
                  transition-property: transform;
                  box-sizing: content-box;

                  li.carrousel-item {
                    height: 100px;
                    box-sizing: border-box;
                    padding: 0px 0px 0px 60px;
                    width: 100%;
                    flex-shrink: 0;
                    position: relative;
                    transition-property: transform;

                    button {
                      outline: none;
                      width: 100%;
                      box-sizing: border-box;
                      position: relative;
                      padding: 0px;
                      border: 0px;
                      background-color: transparent;
                      display: flex;
                      align-items: center;
                      font-size: 100%;
                      line-height: 1.15;
                      margin: 0px;
                      overflow: visible;
                      text-transform: none;
                      appearance: button;
                      cursor: pointer;

                      .container {
                        display: none;
                        position: absolute;
                        inset: 1px;
                        pointer-events: none;

                        svg {
                          position: absolute;
                          display: none;
                          left: 3px;
                          top: 3px;
                          width: 99%;
                          height: 100%;
                        }
                      }

                      .carrousel-thumb-wrapper {
                        flex: 0 0 auto;
                        position: relative;
                        width: 100px;
                        height: 100px;

                        .carrousel-thumb {
                          opacity: 1;
                          transform: scale(0.6);
                          flex-shrink: 0;
                          overflow: hidden;
                          width: 100%;
                          height: 100%;
                          transition: opacity 0.2s
                              cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                            transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

                          img {
                            width: 100%;
                            height: 100%;
                            display: block;
                            object-fit: cover;
                            border-style: none;
                          }
                        }
                      }

                      label {
                        text-transform: uppercase;
                        transform: none;
                        opacity: 1;
                        flex: 1 1 auto;
                        cursor: pointer;
                        display: block;
                        text-align: left;
                        margin: 20px;
                        color: rgb(255, 255, 255);
                        font-size: 14px;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        transition: opacity 0.3s
                            cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                          transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                      }
                    }
                  }

                  .swiper-slide-active {
                    .carrousel-thumb {
                      transform: scale(1) !important;
                    }

                    .container {
                      display: block !important;
                      position: absolute;
                      inset: 1px;
                      pointer-events: none;

                      svg {
                        position: absolute;
                        display: block !important;
                        left: 3px;
                        top: 3px;
                        width: 99%;
                        height: 100%;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .image-section {
          position: relative;
          width: 100%;
          padding-bottom: 59.0123%;

          .slide-show {
            opacity: 1;
            z-index: 1;
            transition-delay: 0s;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;

            .slide-show-item-image {
              width: 100%;
              height: 100%;

              img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                display: block;
                border-style: none;
              }
            }
          }
        }
      }
    }
  }
`;
