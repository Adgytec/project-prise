"use client";

import React, { useEffect, useRef } from "react";
import styles from "./navigation.module.scss";
import NavMain from "./NavMain";
import Container from "../Container/Container";
import Image from "next/image";
import { rootLinks } from "@/data/navigation";
import Link from "next/link";

const NavUpper = () => {
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        new ResizeObserver(() => {
            let height = navRef.current?.offsetHeight;
            document.documentElement.style.setProperty(
                "--nav-upper",
                `${height}px`,
            );
        }).observe(document.documentElement);
    }, []);

    return (
        <div className={styles.navUpperParent}>
            <Container
                type="normal"
                className={styles.navUpper}
                htmlRef={navRef}
            >
                <div>
                    <Link href="/">
                        <img
                            width={200}
                            height={100}
                            src="/logo.webp"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div>
                    <img
                        width={200}
                        height={100}
                        src="/project.webp"
                        alt="project"
                    />
                </div>

                <div>
                    <img
                        width={200}
                        height={100}
                        src="/bank-new.webp"
                        alt="bank"
                    />
                </div>

                {/* <div className={styles.donate}>
					<a
						data-type="button"
						data-variant="primary"
						href={rootLinks.donate.link}
					>
						{rootLinks.donate.title}
					</a>
				</div> */}
            </Container>
        </div>
    );
};

const Navigation = () => {
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        new ResizeObserver(() => {
            let height = navRef.current?.offsetHeight;
            document.documentElement.style.setProperty("--nav", `${height}px`);
        }).observe(document.documentElement);
    }, []);

    return (
        <nav className={styles.nav} ref={navRef}>
            <NavUpper />
            <NavMain />
        </nav>
    );
};

export default Navigation;
