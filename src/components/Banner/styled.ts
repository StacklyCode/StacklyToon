import { css } from "@emotion/react";
import { calculateInRem } from '@Utils/convertToRem';
import { ResponsiveQueries } from '@Src/themes/constants';

export const BannerStyled = css`
  background-color: #2C2222;
  border-radius: 10px;
  .banner-title{
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    @media screen and (min-width: ${ResponsiveQueries.md}){
      font-size: ${calculateInRem(28)};
    }
    @media screen and (min-width: ${ResponsiveQueries.xl}){
      font-size: ${calculateInRem(40)};
    }
  }
  .banner-description{
    color: #D7D6D6;
    line-height: 30px;
    font-weight: normal;
    @media screen and (min-width: ${ResponsiveQueries.md}){
      line-height: 38.52px;
      font-size: ${calculateInRem(18)};
    }
    @media screen and (min-width: ${ResponsiveQueries.xl}){
      font-size: ${calculateInRem(24)};
    }
    
  }
  .banner-content{
    background-color: #2C2222;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    @media screen and (min-width: ${ResponsiveQueries.xl}){
     padding: ${calculateInRem(120)} ${calculateInRem(80)};
    }
  }
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: ${ResponsiveQueries.md}){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const BannerVideo = css`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 ${calculateInRem(10)} ${calculateInRem(10)};
  background-image: url("video-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::before{
    content: '';
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
    backdrop-filter: blur(2px);
  }
  .banner-video-icon{
    width: 82px;
    height: 82px;
    z-index: 10;
    border: 2px solid white;
    border-radius: 50%;
  }
  @media screen and (min-width: ${ResponsiveQueries.md}){
    height: 455px;
  }
`
