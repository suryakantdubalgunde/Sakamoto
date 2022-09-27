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
		<img src="https://cdn.discordapp.com/attachments/928341740434378752/1016160204355813437/3.png" width="130" alt="Akio"></img>
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
			<FooterLink href="https://github.com/ShivamKun">Staff</FooterLink>
			<FooterLink href="https://shivamkun.github.io/Sakamoto/pages/ToS.html">Terms</FooterLink>
			<FooterLink href="https://shivamkun.github.io/Sakamoto/pages/Privacy.html">Privacy</FooterLink>
		</Column>
		<Column>
			<Heading>  </Heading>
			<FooterLink href="https://discord.com/invite/bkF4DwdTsH">Discord</FooterLink>
			<FooterLink href="#">We're Hiring!</FooterLink>
			<FooterLink href="#">Support</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
