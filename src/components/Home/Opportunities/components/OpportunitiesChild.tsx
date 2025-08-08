"use client";

import { Blog } from "@/data/blog-category";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../opportunities.module.scss";
import Link from "next/link";
import { displayTitle } from "@/data/helper";
import { Phase } from "@/data/phases";

interface OpportunitiesChildProps {
  blogs: Blog[];
  phase: Phase;
}

// time is time in ms
const time = 5000;

const OpportunitiesChild = ({ blogs, phase }: OpportunitiesChildProps) => {
  const [currentResponse, setCurrentResponse] = useState(0);
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearInterval(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      handleChange((0 + 1) % blogs.length);
    }, time);

    // set time value in css
    document
      .getElementById("home-opportunity-response")
      ?.style.setProperty("--_time", `${time}ms`);
  }, []);

  const handleChange = (index: number) => {
    setCurrentResponse(index);

    clearInterval(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      handleChange((index + 1) % blogs.length);
    }, time);
  };

  return (
    <div className={styles.response} id="home-opportunity-response">
      <div className={styles.container}>
        {blogs.length === 0 && (
          <div className={styles.empty}>
            <h3>No items right now</h3>
          </div>
        )}
        {blogs.map((item, index) => {
          return (
            <label key={item.title}>
              <div className={styles.items}>
                <h3 className={styles.title} title={item.title}>
                  {displayTitle(
                    item.title,
                    currentResponse === index ? item.title.length : 128,
                  )}
                </h3>

                {/* parent for height animation */}
                <div className={styles.details}>
                  <div>
                    <p className={styles.category}>
                      <p>{item.category.name}</p>
                    </p>

                    <p>{item.summary ? item.summary : item.title}</p>

                    <Link
                      data-type="link"
                      data-variant="secondary"
                      href={`/publications/${phase}/${item.blogId}`}
                    >
                      Read More {">"}
                    </Link>

                    <input
                      type="radio"
                      name="response"
                      checked={currentResponse === index}
                      onChange={(e) => handleChange(index)}
                    />
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <div className={styles.image}>
        <img src="/home/blogs/blog4.webp" alt="" />
      </div>
    </div>
  );
};

export default OpportunitiesChild;
