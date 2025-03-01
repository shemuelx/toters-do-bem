"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useUser } from "../api/UserContext";
// import "../assets/styles/Header-Minha-Conta.css";
import styles1 from "../assets/styles/Header-Minha-Conta.module.css";
import styles2 from "../assets/styles/Header-NavMenu.module.css";
import { ROLES } from "./../utils/constants";

function HeaderLogin() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const { user, setUser } = useUser();

	const handleClickOutside = useCallback((event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setDropdownOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const getRolePath = () => {
		switch (user.role) {
			case "lider":
				return "/minha-conta-lider";
			case "psicologo":
				return "/minha-conta-psicologo";
			case "educador":
				return "/minha-conta-educador";
			default:
				return "/";
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	if (!user) {
		return (
			<ul className={styles2["auth-links"]}>
				<li>
					<Link href="/acesso" passHref>
						Login
					</Link>
				</li>
				<li>
					<Link href="/servicos" passHref className={styles2["register-btn"]}>
						CADASTRAR
					</Link>
				</li>
			</ul>
		);
	}

	const name = user?.name?.split(" ")[0];

	return (
		<div className={styles1.dropdown} ref={dropdownRef}>
			<button className={styles1.dropbtn} onClick={toggleDropdown}>
				Olá, <span>{name}!</span>
			</button>
			{dropdownOpen && (
				<div className={`${styles1["dropdown-content"]} ${styles1.show}`}>
					<Link href={getRolePath()}>Minha Conta</Link>
					{user.role === ROLES.LIDER && (
						<Link href="/interfaz-lider">Lista de Voluntariados</Link>
					)}
					<Link href="/" onClick={logout}>
						Sair
					</Link>
				</div>
			)}
		</div>
	);
}

export default HeaderLogin;
