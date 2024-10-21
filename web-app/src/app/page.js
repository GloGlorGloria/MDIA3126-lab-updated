"use client";

import Link from "next/link";

export default function Page() {
    return (
        <nav className="nav">
          <h1>Welcome to my page!</h1>
          <ul>
                <li>
                    <Link 
                    href={"/api"}
                    style={{ color: "blue", textDecoration: "underline", fontWeight: "bold" }}
                    >Check out API here!</Link>
                </li>
            </ul>
        </nav>
    );
}
