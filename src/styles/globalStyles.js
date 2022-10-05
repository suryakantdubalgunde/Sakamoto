import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: #23272A;
		font-family: 'Gilroy-Regular', sans-serif;
			user-select: none;
			-webkit-user-select: none; /* Safari 3.1+ */
			-moz-user-select: none; /* Firefox 2+ */
			-ms-user-select: none; /* IE 10+ */
	}
	body > #root {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	::placeholder {
		color: #FFFFFF;
		opacity: 0.3;
	}

	/* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #4F4F4F #141414;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #141414;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #4F4F4F;
    border-radius: 10px;
    border: 0px none #FFFFFF;
  }

	.swiper-pagination-bullet-active {
    background-color: #FFFFFF !important;
	}
	.swiper-pagination-bullet {
		background-color: #404040;
		@media screen and (max-width: 600px) {
			width: 0.4rem;
			height: 0.4rem;
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
    color: #FFFFFF !important;
		padding-bottom: 20px;
	}

	.swiper-wrapper{
		padding-bottom: 30px;
		@media screen and (max-width: 600px) {
			padding-bottom: 40px;
		}
	}

	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 0px !important;
	}

	@media only screen and (max-width: 600px) {
		.plyr button {
			font-size: 0.8rem;
		}
	}


	img {  
		user-drag: none;  
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	 }
	 
	.skip-button {
		padding: 0.3rem 1rem;
		position: absolute;
		top: -1.5rem;
		right: 3rem;
		border-radius: 0.3rem;
		border: 1px solid rgba(255, 255, 255, 0.4);
		outline: none;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.6);
		color: #FFFFFF;
	}
`;

export default GlobalStyle;