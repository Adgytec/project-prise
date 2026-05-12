"use client";

import React, { useEffect, useState } from "react";
import styles from "./navigation.module.scss";
import Container from "../Container/Container";
import { NavBarLinks, navBarLinks, rootLinks } from "@/data/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

type HandleNavBarLinks = (
    item: NavBarLinks,
    level: number,
) => React.JSX.Element;

const NavMain = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(false);
    };

    const handleNavBarLinks: HandleNavBarLinks = (
        { title, links, link, active },
        level,
    ) => {
        const isRoot = links === undefined;

        if (isRoot && link) {
            let element = (
                <li
                    key={link}
                    className={`${level === 0 ? styles.linkItem : ""}`}
                >
                    <Link
                        href={link}
                        data-type="link"
                        // data-active={link === pathname}
                        data-active={pathname.includes(link)}
                        data-level={level}
                        onClick={handleClick}
                    >
                        {title}
                    </Link>
                </li>
            );

            return element;
        }

        if (!links) return <></>;

        if (!active) active = "";

        return (
            <li
                key={title}
                className={styles.sublink_container}
                data-level={level}
            >
                {link ? (
                    <Link
                        href={link}
                        data-type="link"
                        data-active={pathname.includes(link)}
                        data-level={level}
                        onClick={handleClick}
                    >
                        {title}
                        {level === 0 && <FontAwesomeIcon icon={faAngleDown} />}
                    </Link>
                ) : (
                    <p
                        data-active={pathname.includes(active)}
                        data-level={level}
                    >
                        {title}
                        {level === 0 && <FontAwesomeIcon icon={faAngleDown} />}
                    </p>
                )}

                <ul className={styles.sublink} data-level={level} role="list">
                    <div>
                        {links.map((item) =>
                            handleNavBarLinks(item, level + 1),
                        )}
                    </div>
                </ul>
            </li>
        );
    };

    return (
        <div className={styles.navMain}>
            <Container type="normal" className={styles.container}>
                <div className={styles.toggle}>
                    <input
                        id="nav"
                        type="checkbox"
                        checked={open}
                        onChange={(e) => setOpen(e.target.checked)}
                    />
                    <label htmlFor="nav" className={styles.label}>
                        <span></span>
                    </label>

                    <div>
                        {/* <Link
							href={rootLinks.donate.link}
							data-type="button"
							data-variant="primary"
						>
							{rootLinks.donate.title}
						</Link> */}
                        <img
                            // width={200}
                            // height={100}
                            src="/logo.webp"
                            alt="logo"
                        />
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.links}>
                        <div className={styles.control}>
                            <label htmlFor="nav" className={styles.label}>
                                <span></span>
                            </label>
                        </div>

                        <ul role="list">
                            <li className={styles.linkItem}>
                                <Link
                                    className={styles.home}
                                    data-type="link"
                                    href="/"
                                    data-active={pathname === "/"}
                                    onClick={handleClick}
                                >
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>

                            {navBarLinks.map((item) =>
                                handleNavBarLinks(item, 0),
                            )}
                        </ul>
                    </div>

                    <div className={styles.logo}>
                        <div>
                            <img
                                width={200}
                                height={100}
                                src="/logo.webp"
                                alt="logo"
                            />
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMain;
