import React from 'react';
import {View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';
const Icons = ({name, color}) => {
  return (
    <View>
      {name === 'home' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25">
            <Path
              fill={color}
              d="M23.355 10.44l-.001-.002-9.791-9.79A2.195 2.195 0 0012 0c-.59 0-1.145.23-1.563.647L.652 10.433a2.212 2.212 0 00-.006 3.13 2.197 2.197 0 001.534.648h.39v7.205a2.59 2.59 0 002.587 2.586h3.83a.703.703 0 00.703-.703V17.65c0-.65.53-1.18 1.18-1.18h2.26c.65 0 1.18.53 1.18 1.18v5.65c0 .387.314.702.703.702h3.83a2.589 2.589 0 002.587-2.586v-7.205h.362c.59 0 1.144-.23 1.562-.647.86-.861.861-2.262.002-3.124zm-.995 2.13a.798.798 0 01-.568.235h-1.066a.703.703 0 00-.703.703v7.908c0 .65-.529 1.18-1.18 1.18h-3.127V17.65a2.59 2.59 0 00-2.586-2.586h-2.26a2.59 2.59 0 00-2.586 2.586v4.946H5.157c-.65 0-1.18-.53-1.18-1.18v-7.908a.703.703 0 00-.703-.703H2.227a.798.798 0 01-.586-.236.804.804 0 010-1.136l9.791-9.791A.797.797 0 0112 1.406c.215 0 .416.084.568.236l9.789 9.788a.805.805 0 01.003 1.14z"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'chat' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="25"
            fill="none"
            viewBox="0 0 28 25">
            <Path
              fill={color}
              d="M0 17.358a.82.82 0 001.297.667l4.51-3.217c.378-.27.824-.412 1.288-.412h9.92a3.17 3.17 0 003.166-3.167V.82a.82.82 0 00-.82-.82H3.167A3.17 3.17 0 000 3.167v14.19zM1.64 3.167c0-.842.685-1.526 1.527-1.526H18.54v9.588c0 .841-.685 1.526-1.526 1.526h-9.92c-.808 0-1.583.248-2.24.717L1.64 15.765V3.167z"></Path>
            <Path
              fill={color}
              d="M28 9.53a3.17 3.17 0 00-3.166-3.168h-2.192a.82.82 0 000 1.641h2.192c.841 0 1.526.685 1.526 1.526v12.598l-3.214-2.292a3.837 3.837 0 00-2.241-.717h-9.92A1.528 1.528 0 019.46 17.59v-.735a.82.82 0 00-1.64 0v.735a3.17 3.17 0 003.166 3.167h9.92c.465 0 .91.143 1.288.413l4.51 3.217A.821.821 0 0028 23.72V9.53zM5.898 6.11h9.478a.82.82 0 000-1.641H5.898a.82.82 0 000 1.64zM5.898 9.937h9.478a.82.82 0 000-1.64H5.898a.82.82 0 000 1.64z"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'profile' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="27"
            fill="none"
            viewBox="0 0 22 27">
            <Path
              fill={color}
              d="M10.834 12.702c1.745 0 3.256-.626 4.49-1.86 1.235-1.235 1.861-2.746 1.861-4.491 0-1.745-.626-3.256-1.86-4.49C14.088.625 12.578 0 10.833 0c-1.746 0-3.256.626-4.49 1.86-1.236 1.235-1.862 2.746-1.862 4.49 0 1.746.627 3.257 1.861 4.492 1.235 1.234 2.746 1.86 4.49 1.86zM7.436 2.953c.947-.947 2.059-1.408 3.398-1.408s2.45.46 3.398 1.408c.947.948 1.408 2.06 1.408 3.398 0 1.339-.461 2.45-1.408 3.398-.948.947-2.06 1.408-3.398 1.408-1.339 0-2.45-.46-3.398-1.408S6.028 7.69 6.028 6.35s.46-2.45 1.408-3.398zM21.947 20.277a15.662 15.662 0 00-.214-1.667 13.118 13.118 0 00-.41-1.675 8.276 8.276 0 00-.689-1.562 5.892 5.892 0 00-1.038-1.353 4.578 4.578 0 00-1.492-.938 5.154 5.154 0 00-1.904-.344c-.27 0-.53.11-1.032.437-.31.202-.672.435-1.076.694-.345.22-.813.426-1.391.613a5.524 5.524 0 01-1.702.275 5.528 5.528 0 01-1.702-.275c-.577-.187-1.045-.393-1.39-.613-.4-.256-.762-.49-1.076-.694-.503-.327-.763-.438-1.032-.438-.686 0-1.326.116-1.904.345-.58.23-1.082.545-1.492.938-.392.375-.741.83-1.038 1.353a8.293 8.293 0 00-.689 1.562 13.159 13.159 0 00-.41 1.675 15.577 15.577 0 00-.213 1.667A22.568 22.568 0 000 21.834c0 1.377.438 2.491 1.3 3.313.853.811 1.98 1.222 3.352 1.222h12.697c1.37 0 2.498-.411 3.35-1.222.863-.821 1.301-1.936 1.301-3.313 0-.531-.018-1.055-.053-1.557zm-2.313 3.75c-.563.536-1.31.797-2.286.797H4.652c-.976 0-1.723-.26-2.286-.796-.552-.526-.82-1.244-.82-2.194 0-.494.016-.982.048-1.45.032-.46.097-.964.193-1.5.095-.53.217-1.027.36-1.477a6.75 6.75 0 01.561-1.27c.223-.393.48-.73.763-1 .265-.255.6-.462.993-.618a3.555 3.555 0 011.217-.235c.054.029.15.084.306.186.318.207.684.443 1.089.701.456.291 1.044.554 1.746.78a7.07 7.07 0 002.177.35c.727 0 1.46-.117 2.177-.349.703-.227 1.291-.49 1.748-.78.414-.266.77-.495 1.088-.702.156-.102.252-.157.306-.186.444.012.853.091 1.218.235.393.156.727.364.992.617.283.271.54.608.763 1 .234.412.423.84.56 1.27.145.451.266.948.361 1.477.096.538.161 1.043.193 1.501.033.467.05.955.05 1.45 0 .95-.269 1.668-.821 2.194z"></Path>
          </Svg>
        </>
      ) : null}
    </View>
  );
};

export default Icons;