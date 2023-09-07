import styled from '@emotion/styled';

export const Card = styled.div`
	color: black;
	background-color: white;
	border: 1px solid grey;
	border-radius: 5px;
	margin: 10px;
	padding: 10px;
	height: 20px;
	width: 200px;
	transition: box-shadow 0.5s ease-in-out, height 0.5s ease-in-out;

	&:hover {
		box-shadow: 0 0 5px 1px grey;
		height: 100px;
	}
`;
