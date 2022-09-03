import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
		<img src="Akio.png" width="130" alt="Akio"></img>
		<Heading>SAKAMOTO</Heading>
		</Column>
		<Column>
			<Heading>  </Heading>
			<FooterLink href="/trending">Trending</FooterLink>
			<FooterLink href="/popular">Popular</FooterLink>
			<FooterLink href="/favourites">Favourites</FooterLink>
		</Column>
		<Column>
			<Heading>  </Heading>
			<FooterLink href="#">Staff</FooterLink>
			<FooterLink href="#">Terms</FooterLink>
			<FooterLink href="#">Privacy</FooterLink>
		</Column>
		<Column>
			<Heading>  </Heading>
			<FooterLink href="#">Forum</FooterLink>
			<FooterLink href="#">We're Hiring!</FooterLink>
			<FooterLink href="#">Support</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
