import { useSearch } from "@tanstack/react-location";
import "./showcase.css";

export default function CardShowCase() {
    const search = useSearch();
    const data = { search };
    const fullName = search['fullName'];
    const firstName = fullName.split(" ")[0];
    const book = search['favouriteBooks']
    console.log(book);
    const book1 = book.split(",")[0];
    const book2 = book.split(",")[1];
    const book3 = book.split(",")[2];
    const book4 = book.split(",")[3];
    const book5 = book.split(",")[4];
    console.log(book1);
    const book1Name = book1.split("-")[0];
    const book1Author = book1.split("-")[1];
    const book2Name = book2.split("-")[0];
    const book2Author = book2.split("-")[1];
    const book3Name = book3.split("-")[0];
    const book3Author = book3.split("-")[1];
    const book4Name = book4.split("-")[0];
    const book4Author = book4.split("-")[1];
    const book5Name = book5.split("-")[0];
    const book5Author = book5.split("-")[1];
    console.log(book2);
    // const book3
    console.log(firstName)
    console.log(data);
    console.log(search);
    const checked = search['true'];
    console.log(checked);
    const asArray = Object.entries(search);
    console.log(asArray);
    const filtered = asArray.filter(([key, value]) => value == 'true');
    console.log(filtered);
    const justTrue = Object.fromEntries(filtered);
    console.log(justTrue);
    const about = search['aboutMe'];
    const gitHub = search['githubURL'];
    const twitter = search['twitterURL'];
    console.log(fullName);
    console.log(search['aboutMe']);
    console.log(search['githubURL']);
    console.log(search['twitterURL']);
    // console.log(search['favouriteBooks']);
    return (
        <div className="pageBody">
            <p>Hey it's {JSON.stringify(search)} </p>
            <main class="has-dflex-center">
                <section>
                    <div class="lx-container-85">
                        <div class="lx-row align-stretch">
                            <div class="lx-column is-3">
                                <div class="lx-row">
                                    <div class="lx-card">
                                        <div class="lx-row">
                                            <div class="has-dflex-center bs-md pic">
                                                <img
                                                    src="https://github.com/luxonauta.png"
                                                    alt="Armaan"
                                                />
                                            </div>
                                            <div class="infos">
                                                <span>
                                                    <i class="fas fa-user-circle"></i>&nbsp;&nbsp; {fullName}
                                                </span>
                                                <span>
                                                    <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                                                    Developer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lx-card">
                                        <div class="lx-row">
                                            <h1 class="title">Connect with {firstName}</h1>
                                            <div class="mini-cards">
                                                <a
                                                    class="has-dflex-center bs-md"
                                                    href="https://github.com/{gitHub}"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i class="fab fa-github-alt"></i>
                                                </a>
                                                <a
                                                    class="has-dflex-center bs-md"
                                                    href="https://twitter.com/ {twitter} ?lang=en"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="lx-column">
                                <div class="lx-row">
                                    <div class="lx-row lx-card">
                                        <h1 class="title">
                                            <i class="fas fa-info-circle"></i>&nbsp;Welcome to&nbsp;
                                            {firstName}'s corner of the Internet
                                        </h1>
                                    </div>
                                    <div class="lx-row lx-card">
                                        <h1 class="title">
                                            <i class="fas fa-hand-point-right"></i>&nbsp;About me
                                        </h1>
                                        <div class="text">
                                            <p>
                                                {about}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="lx-row lx-card">
                                        <h1 class="title">
                                            <i class="fas fa-terminal"></i>&nbsp;Technologies
                                        </h1>
                                        <div class="mini-cards">
                                            <span class="has-dflex-center bs-md" title="CSS">
                                                <i class="fab fa-css3-alt"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="HTML">
                                                <i class="fab fa-html5"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="JS">
                                                <i class="fab fa-js"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="Sass">
                                                <i class="fab fa-sass"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="Git">
                                                <i class="fab fa-git-alt"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="Gulp">
                                                <i class="fab fa-gulp"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="Node JS">
                                                <i class="fab fa-node-js"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="NPM">
                                                <i class="fab fa-npm"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="PHP">
                                                <i class="fab fa-php"></i>
                                            </span>
                                            <span class="has-dflex-center bs-md" title="React">
                                                <i class="fab fa-react"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="lx-row lx-card">
                                        <h1 class="title">
                                            <i class="fas fa-book"></i>&nbsp;My favorite books
                                        </h1>
                                        <div class="text">
                                            <ol>
                                                <li>
                                                    <p>
                                                        <b>{book1Name}</b>&nbsp;- {book1Author}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <b>{book2Name}</b>&nbsp;- {book2Author}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <b>{book3Name}</b>&nbsp;- {book3Author}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <b>{book4Name}</b>&nbsp;- {book4Author}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <b>{book5Name}</b>&nbsp;- {book5Author}
                                                    </p>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
