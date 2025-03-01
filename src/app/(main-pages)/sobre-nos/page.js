"use client";

import Image from "next/image"; // Importar el componente Image de next/image
import Link from "next/link"; // Importar el componente Link de next/link
import React, { useState } from "react";
import Header from "../../../components/Header-NavMenu";
import Footer from "../../../components/Footer";
// import "../../../assets/styles/Mobile-Menu.module.css";
// import "../../../assets/styles/App.css";
import styles1 from "../../../assets/styles/App.module.css";
import styles2 from "../../../assets/styles/Mobile-Menu.module.css";
import styles3 from "../../../assets/styles/sobreNos.module.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import StarIcon from "@mui/icons-material/Star";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
	styled,
} from "@mui/material";
import imagenGente from "../../../assets/images/imagenSobreNos3.jpg";
import barbara from "../../../assets/images/toters/Barbara.jpg";
import bruno from "../../../assets/images/toters/Bruno.jpg";
import camila from "../../../assets/images/toters/Camila.jpg";
import david from "../../../assets/images/toters/David.jpg";
import daysi from "../../../assets/images/toters/Daysi.jpg";
import henry from "../../../assets/images/toters/Henry.jpg";
import jani from "../../../assets/images/toters/Jani.png";
import luis from "../../../assets/images/toters/Luis.jpg";
import manuel from "../../../assets/images/toters/Manuel.jpg";
import maria from "../../../assets/images/toters/Maria.jpg";
import merlina from "../../../assets/images/toters/Merlina.jpg";
import marianela from "../../../assets/images/toters/Maríanela.png";
import miguel from "../../../assets/images/toters/Miguel.png";
import nadi from "../../../assets/images/toters/Nadi.png";
import natalia from "../../../assets/images/toters/Natalia.jpg";
import patricia from "../../../assets/images/toters/Patricia.jpg";
import samuel from "../../../assets/images/toters/Samuel.jpg";
import sergio from "../../../assets/images/toters/Sergio.jpg";
import victor from "../../../assets/images/toters/Victor.png";
import yuri from "../../../assets/images/toters/Yuri.jpg";
import yurisay from "../../../assets/images/toters/Yurisay.jpg";
import imgComunidade from "../../../assets/images/voluntarios.jpg";

const About = () => {
	const [showAllCards, setShowAllCards] = useState(false);

	const toggleCards = () => {
		setShowAllCards(!showAllCards);
	};

	const StyledImg = styled(Image)(() => ({
		width: "100%",
		maxWidth: "800px",
		alignItems: "center",
		borderRadius: "2%",
		display: "flex",
	}));

	const Styledbutton = styled(Link)(() => ({
		alignItems: "center",
		borderRadius: "10px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
		textDecoration: "none",
		padding: "0.7rem 3rem",
		fontSize: "1rem",
		backgroundColor: "#FFB30B",
		color: "#633100",
		fontWeight: "600",
		transition: "transform 0.3s ease, background-color 0.3s ease",
		"&:hover": {
			backgroundColor: "#FFE246",
			transform: "translateY(-0.5px)",
		},
	}));

	const StyledbuttonVoluntario = styled(Link)(() => ({
		alignItems: "center",
		borderRadius: "10px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
		textDecoration: "none",
		padding: "0.7rem 3rem",
		fontSize: "1rem",
		backgroundColor: "#084f54",
		color: "#ffff",
		fontWeight: "600",
		transition: "transform 0.3s ease, background-color 0.3s ease",
		"&:hover": {
			backgroundColor: "#033232",
			transform: "translateY(-0.5px)",
		},
	}));

	return (
		<>
			<header className="App-header">
				<Header />
			</header>
			<div className={styles3.about}>
				<Container
					maxWidth="xl"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						width: "100vw",
					}}
				>
					{/* conteúdo da primeira div ---------------------------------------------------- */}
					<div className={styles3["grid-container-main"]}>
						<div className={styles3["text-main"]}>
							<Typography variant="h4" color="black" fontWeight={700}>
								Quem Somos?
								<hr className={styles3.hr} />
							</Typography>
							<Typography variant="body">
								A Comunidade Toti é um coletivo de profissionais imigrantes de
								tecnologia no Brasil, unidos pelo desejo de crescer profissionalmente e
								de apoiar uns aos outros. Nossa missão é oferecer um espaço de
								acolhimento, onde o conhecimento e as experiências se entrelaçam para
								criar oportunidades de desenvolvimento e integração.
							</Typography>
						</div>
						{/* img da primeira div -------------------- */}
						<div className={styles3["img-main"]} />
					</div>

					{/* conteúdo da segunda div -------------------------------------- */}
					<div className={`${styles3["grid-container-main"]} ${styles3.reverse}`}>
						{/* img da segunda div--------------------- */}
						<div className={styles3["img-main-center"]}>
							<StyledImg
								src={imgComunidade}
								alt="Voluntarios no RS"
								width={800}
								height={450}
							/>
							<span>
								As Toters Marianela Arana & Mayfer Ramirez, são voluntarias no RS
							</span>
						</div>
						<div className={styles3["text-main"]}>
							<Typography variant="h4" color="black" fontWeight={700}>
								Nossa visão <hr className={styles3.hr} />
							</Typography>
							<Typography variant="body">
								Em resposta a os recentes eventos no Rio Grande do Sul, nossa comunidade
								está mobilizada para fazer a diferença.
							</Typography>
							<Typography variant="body">
								Com empatia e solidariedade, lançamos esta plataforma para conectar
								voluntários e recursos, visando oferecer ajuda prática e esperança
								àqueles afetados pelas inundações.
							</Typography>
							<Typography variant="body">
								O intuito dessa plataforma é oferecer apoio psicossocial às famílias
								afetadas pela tragédia no RS, disponibilizando serviços com psicólogos e
								educadores sociais. Esses profissionais estão prontos para atender e
								auxiliar no processo de recuperação emocional e social das pessoas
								impactadas, garantindo um suporte integral e humanizado.
							</Typography>
						</div>
					</div>

					{/* conteúdo da terceira div ---------------------------------------------------- */}
					<div className={styles3["grid-container-main"]} marginTop={10}>
						<div className={styles3["text-main"]}>
							<Typography
								textAlign="start"
								variant="h4"
								color="black"
								fontWeight={700}
							>
								Faça parte você também <hr className={styles3.hr} />
							</Typography>
							<Typography textAlign="start" variant="body">
								Convidamos profissionais de todas as áreas a se juntarem a este
								movimento humanitário, contribuindo com seu tempo e habilidades em apoio
								às vítimas das inundações no RS. Esperamos que muitos se juntem a nós
								neste esforço coletivo, pois juntos somos mais fortes. Todos juntos pelo
								Rio Grande do Sul.
							</Typography>
						</div>
						{/* img da primeira div -------------------- */}
						<div className={styles3["img-main"]}>
							<StyledImg
								src={imagenGente}
								alt="Imagem sobre nós"
								width={800}
								height={450}
							/>
						</div>
					</div>
					<Grid
						container
						spacing={2}
						justifyContent="space-between"
						alignItems="center"
						display="flex"
						padding={{ xs: "0", md: "1.5rem" }}
						marginBottom={10}
						marginTop={2}
					>
						<Grid
							item
							xs={12}
							md={12}
							display="flex"
							gap={2}
							alignItems="center"
							padding={{ xs: "0", md: "1rem" }}
							justifyContent="space-evenly"
							direction={{ xs: "column-reverse", md: "row" }}
						>
							<Styledbutton href="./demo">Liderança Emigrante </Styledbutton>
							<StyledbuttonVoluntario href="/servicos">
								Quero ser voluntário
							</StyledbuttonVoluntario>
						</Grid>
					</Grid>

					{/* ============================== NOSSOS VALORES ================================== */}
					<div className={styles3.nossoValores}>
						<Typography
							textAlign="center"
							justifyContent="center"
							variant="h4"
							color="black"
							fontWeight={700}
						>
							Nossos valores
							<hr className={`${styles3.hr} ${styles3.center}`} />
						</Typography>
						<Grid
							container
							spacing={2}
							display="flex"
							alignItems="center"
							padding={{ xs: "0", md: "1rem" }}
							justifyContent="center"
							direction="row"
							marginBottom={3}
							mt="2rem"
						>
							<Grid item xs={5} md={4}>
								<Card sx={{ maxWidth: "100%" }}>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Empatia <SentimentSatisfiedAltIcon />
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Compreensão e respeito pelas experiências e desafios dos imigrantes e
											das comunidades afetadas por enchentes.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={7} md={4}>
								<Card sx={{ maxWidth: "100%" }}>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Inclusão <AutorenewIcon />
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Garantir que o site e seus serviços sejam acessíveis e úteis para
											pessoas de diversas origens, línguas e habilidades.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={7} md={4}>
								<Card sx={{ maxWidth: "100%" }}>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Segurança e Privacidade <SecurityIcon />
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Proteger os dados pessoais e sensíveis dos usuários com rigor
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={5} md={4}>
								<Card sx={{ maxWidth: "100%" }}>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Resiliência <PeopleIcon />
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Adaptar-se e responder efetivamente a desafios e mudanças, tanto
											tecnológicas quanto sociais.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}
								display="flex"
								gap={2}
								alignItems="center"
								padding={{ xs: "0", md: "0" }}
							>
								<Card sx={{ maxWidth: "100%" }}>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
											alignItems="center"
										>
											Qualidade <StarIcon />
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Entregar um produto confiável, intuitivo e funcional que atende às
											necessidades dos usuários.Inovação:Investir em pesquisa e
											desenvolvimento para integrar novas soluções tecnológicas que possam
											beneficiar os usuários.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</div>
					{/* CARDS DO TIME--------------------------------------*/}
					<div className={styles3["container-time"]}>
						<Typography
							textAlign="center"
							justifyContent="center"
							variant="h4"
							color="black"
							fontWeight={700}
						>
							Nosso Time
							<hr className={`${styles3.hr} ${styles3.center}`} />
						</Typography>

						<div className={styles3["grid-container-cards"]}>
							<Card className={styles3["card-toter"]}>
								<Image
									src={barbara}
									alt="Mulher com cabelo longo e escuro. Está vestida com um suéter preto. Sua expressão é séria e profissional. A foto está em preto e branco."
									title="Barbara Nery"
									height={200}
									width={200}
								/>

								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Barbara Nery
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Mentora TI
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/barbarafnery/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card className={styles3["card-toter"]}>
								<Image
									src={bruno}
									alt="Homem jovem com cabelo curto e óculos. Sorri e veste uma camiseta escura. A imagem parece ser tirada ao ar livre."
									title="Bruno de Souza"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Bruno de Souza
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Amigo Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Full Stack
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/bruno-de-sousa-silva-312528176/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card className={styles3["card-toter"]}>
								<Image
									src={camila}
									alt="Mulher jovem com cabelo longo e escuro, ligeiramente inclinado para a frente. Parece séria e está vestida com uma camiseta de cor escura."
									title="Camila Souza"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Camila Souza
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Amiga Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://github.com/camiladz"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>

							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={david}
									alt="Homem com cabelo curto e escuro, com um largo sorriso. Usa uma camisa branca e uma gravata azul, posando de forma formal."
									title="David Puche"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										David Puche
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Líder TI: Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/david-puche/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>

							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={daysi}
									alt="Mulher com cabelo castanho claro e liso, penteado para um lado. Veste uma blusa de manga longa e tem uma expressão amigável."
									title="Daysibel Cotiz"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Dayssibel Cotiz
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Líder TI: Back-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/daysibelcotizpitter"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={henry}
									alt="Um homem com óculos e camisa polo marrom"
									title="Henry Luna"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Henry Luna
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/henry-luna-0793402a/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>

							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={jani}
									alt="Mulher jovem com cabelo longo e liso, tingido de uma cor loiro escuro. Está sorrindo e veste uma jaqueta escura com uma blusa vermelha."
									title="Jani Exaez"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Jani Exaez
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/jexaez/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={luis}
									alt="Homem de pele escura e cabelo curto. A imagem mostra um logotipo digital sobre o rosto, indicando que pode estar usando um efeito visual na foto"
									title="Luis Cláudio"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Luis Cláudio
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Amigo Toter
									</Typography>

									<Typography variant="body2" color="text.secondary">
										Full Stack
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/luizincode/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={manuel}
									alt="Homem jovem com cabelo curto e crespo. Veste uma camisa branca e uma gravata vermelha, com um fundo de tela azul brilhante."
									title="Manuel Bernardo"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Manuel Bernardo
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/manuel-bernardo-165373208/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={marianela}
									alt="Mulher com óculos e cabelo longo e escuro. Está vestida com um suéter cinza claro e aparece sorrindo."
									title="Maríanela Arana"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Maríanela Arana
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Gestora de Projeto
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/marianela-arana/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={maria}
									alt="Mulher com cabelo longo e escuro, preso. Usa óculos e uma camiseta escura. Está sorrindo e parece estar em um ambiente interno."
									title="Maria Rondon"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Maria Rondon
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/mariamedicci"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={merlina}
									alt="Mulher com cabelo cacheado. Camiseta roxa"
									title="Merlina Saudade"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Merlina Saudade
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Amiga Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Psicologa
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/merlina-saudade-ferreira-neira-5a78bb15a/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={miguel}
									alt="miguel"
									title="Homem jovem com cabelo curto e loiro. Está ligeiramente inclinado para a câmera, com uma expressão séria. Veste uma camiseta cinza claro."
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Miguel Lozada
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Amigo Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Back-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/lozada98"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={nadi}
									alt="Mulher com cabelo curto e preto, penteado para cima. Sorri amplamente e veste uma camiseta de cor escura. O fundo de sua foto é de cor amarela brilhante."
									title="Nadi Duno"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Nadi Duno
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Líder TI: Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/nadiduno/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={natalia}
									alt="Mulher branca de cabelo preto, com vestido preto"
									title="Natalia Augusto"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Natalia Augusto
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Amiga Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										UX/UI Designer
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="hhttps://www.linkedin.com/in/nataliaaugustoux/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={patricia}
									alt="Mulher com cabelo longo e escuro. Com ropa elegante preta e branca"
									title="Patricia Adorno "
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Patricia Adorno
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Amiga Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Advogada
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/patricia-adorno-villamayor/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={samuel}
									alt="Homem usando óculos de sol e mochila"
									title="Samuel Erazo"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Samuel Erazo
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/samuel-felipe-erazo"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={sergio}
									alt="Homem branco, com camiseta azul"
									title="Sergio Valério"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Sergio Valério
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Amigo Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/sergio-valerio/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={victor}
									alt="Homem com camiseta preta e fone de ouvido"
									title="Victor Alcalá"
									height={200}
									width={150}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Victor Alcalá
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/alcalamvictor"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>

							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={yuri}
									alt="Homem jovem com cabelo curto e loiro, camiseta preta"
									title="Yuri Rodrigues"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Yuri Rodrigues
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntário | Amigo Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/yuri-rodrigues-nogueira/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
							<Card
								className={`${styles3["card-toter"]} ${showAllCards ? "" : styles3.hidden}`}
							>
								<Image
									src={yurisay}
									alt="Mulher com cabelo preto longo, camiseta branca"
									title="Yurisay Martínez"
									height={200}
									width={200}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Yurisay Martínez
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Voluntária | Toter
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Front-end
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "black" }}
										target="_blank"
										href="https://www.linkedin.com/in/yurisay-martinez/"
									>
										Linkedin
									</Button>
								</CardActions>
							</Card>
						</div>
					</div>
				</Container>
			</div>
			<Footer />
		</>
	);
};

export default About;
