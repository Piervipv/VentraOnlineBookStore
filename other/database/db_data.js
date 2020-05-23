var books = [
    {
        isbn: '978-8817153096',
        title: 'The Adventures of Huckleberry Finn',
        abstract: 'Mark Twain’s The Adventures of Huckleberry Finn is one of the greatest novels in American literature. This paper attempts to outline the images of natural environment and the gap between the black and white people during the civil war. The essential part in this paper likens the way of living inside and outside the city and how Huck gets away from the hypocrisy of society and of the religious people. It illustrates Huck’s adventures in the wild field.',
        fact_sheet: 'Adventures of Huckleberry Finn (or, in more recent editions, The Adventures of Huckleberry Finn) is a novel by Mark Twain, first published in the United Kingdom in December 1884 and in the United States in February 1885. Commonly named among the Great American Novels, the work is among the first in major American literature to be written throughout in vernacular English, characterized by local color regionalism. It is told in the first person by Huckleberry "Huck" Finn, the narrator of two other Twain novels (Tom Sawyer Abroad and Tom Sawyer, Detective) and a friend of Tom Sawyer. It is a direct sequel to The Adventures of Tom Sawyer.',
        interview: null,
        picture: '/assets/img/9788817153096',
        price: 'eur 6.80',
        format: 'paper',
        copies_available: 50,
        isBestseller: true,
        isFavorite: false
    },

    {
        isbn: '978-1987683226',
        title: 'Life on the Mississippi',
        abstract: 'Life on the Mississippi (1883) is a memoir by Mark Twain of his days as a steamboat pilot on the Mississippi River before the American Civil War, and also a travel book, recounting his trip along the Mississippi River from St. Louis to New Orleans many years after the war.',
        fact_sheet: 'Simultaneously published in 1883 in the United States and Great Britain, the book is the first submitted to a publisher as a typewritten manuscript. Twain did not, however, use the typewriter himself. His secretary, Isabel V. Lyon, typed from Twains manuscript.',
        interview: null,
        picture: '/assets/img/9781987683226',
        price: 'eur 3.80',
        format: 'digital',
        copies_available: -1,
        isBestseller: false,
        isFavorite: true
    },
    {
        isbn: '978-5040861118',
        title: 'The Da Vinci Code',
        abstract: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown"s second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been a companion to Mary Magdalene. The novel explores an alternative religious history, whose central plot point is that the Merovingian kings of France were descended from the bloodline of Jesus Christ and Mary Magdalene, ideas derived from Clive Prince"s The Templar Revelation (1997) and books by Margaret Starbird. The book also refers to The Holy Blood and the Holy Grail (1982) though Dan Brown has stated that it was not used as research material.',
        fact_sheet: 'The Da Vinci Code provoked a popular interest in speculation concerning the Holy Grail legend and Mary Magdalene s role in the history of Christianity. The book has, however, been extensively denounced by many Christian denominations as an attack on the Roman Catholic Church, and consistently criticized for its historical and scientific inaccuracies. The novel nonetheless became a worldwide bestseller that sold 80 million copies as of 2009 and has been translated into 44 languages. In November 2004, Random House published a Special Illustrated Edition with 160 illustrations. In 2006, a film adaptation was released by Columbia Pictures.',
        interview: "https://www.youtube.com/watch?v=796qZTi262M",
        picture: '/assets/img/9785040861118',
        price: 'eur 17.90',
        format: 'paper',
        copies_available: 50,
        isBestseller: true,
        isFavorite: false
    },
    {
        isbn: '978-8071459316',
        title: 'Angels & Demons',
        abstract:"CERN director Maximilian Kohler discovers one of the facility's physicists, Leonardo Vetra, murdered, his chest branded with an ambigram of the word 'Illuminati'. Kohler contacts Robert Langdon, an expert on the Illuminati, who determines that the ambigram is authentic. Kohler calls Vetra's adopted daughter Vittoria home and it is ascertained that the Illuminati — an ancient anti-religious organization thought extinct — have stolen a canister containing antimatter, a substance with destructive potential comparable to a nuclear weapon. When at CERN, the canister is stored in a unique electrical charger which ensures the antimatter's stability, but when removed, its backup battery provides power for 24 hours, after which the antimatter would fall out of suspension and, on coming into contact with the physical matter of the container, explode. The canister is located somewhere in Vatican City, with a security camera in front of it, as its digital clock counts down to an explosion due to occur at midnight, which will wipe out the Vatican.",
        fact_sheet: "Angels & Demons is a 2000 bestselling mystery-thriller novel written by American author Dan Brown and published by Pocket Books and then by Corgi Books. The novel introduces the character Robert Langdon, who recurs as the protagonist of Brown's subsequent novels. Angels & Demons shares many stylistic literary elements with its sequels, such as conspiracies of secret societies, a single-day time frame, and the Catholic Church. Ancient history, architecture, and symbology are also heavily referenced throughout the book. A film adaptation was released on May 15, 2009.",
        interview: null,
        picture: '/assets/img/9788071459316',
        price: 'eur 16.80',
        format: 'paper',
        copies_available: 50,
        isBestseller: true,
        isFavorite: false
    },
    {
        isbn: '978-5170808533',
        title: 'Digital Fortress',
        abstract: "When the United States National Security Agency's code-breaking supercomputer TRANSLTR encounters a revolutionary new code, Digital Fortress, that it cannot break, Commander Trevor Strathmore calls in head cryptographer Susan Fletcher to crack it. She discovers that it was written by Ensei Tankado, a former NSA employee who became displeased with the NSA's intrusion into people's private lives. If the NSA doesn't reveal TRANSLTR to the public, Tankado intends to auction the code's algorithm on his website and have his partner, 'North Dakota', release it for free if he dies, essentially holding the NSA hostage. The agency is determined to stop Digital Fortress from becoming a threat to national security.",
        fact_sheet: "Digital Fortress is a techno-thriller novel written by American author Dan Brown and published in 1998 by St. Martin's Press. The book explores the theme of government surveillance of electronically stored information on the private lives of citizens, and the possible civil liberties and ethical implications of using such technology.",
        interview: null,
        picture: '/assets/img/9785170808533',
        price: 'eur 14.50',
        format: 'digital',
        copies_available: 50,
        isBestseller: false,
        isFavorite: true
    },
    {
        isbn: '978-4047916319',
        title: 'The Lost Symbol',
        abstract: "Renowned Harvard symbologist Robert Langdon is invited to give a lecture at the United States Capitol, at the invitation apparently from his mentor, a 33rd degree Mason named Peter Solomon, who is the head of the Smithsonian Institution. Solomon has also asked him to bring a small, sealed package which he had entrusted to Langdon years earlier. When Langdon arrives at the Capitol, however, he learns that the invitation he received was not from Solomon, but from Solomon's kidnapper, Mal'akh posing as Solomon's assistant, who has left Solomon's severed right hand in the middle of the Capitol Rotunda in a recreation of the Hand of Mysteries. Mal'akh then contacts Langdon, charging him with finding both the Mason's Pyramid, which Masons believe is hidden somewhere in Washington, D.C., and the Lost Word, lest Solomon be murdered.",
        fact_sheet: "The Lost Symbol is a 2009 novel written by American writer Dan Brown. It is a thriller set in Washington, D.C., after the events of The Da Vinci Code, and relies on Freemasonry for both its recurring theme and its major characters.\n" +
            "\n" +
            "Released on September 15, 2009, it is the third Brown novel to involve the character of Harvard University symbologist Robert Langdon, following 2000's Angels & Demons and 2003's The Da Vinci Code. It had a first printing of 6.5 million (5 million in North America, 1.5 million in the UK), the largest in Doubleday history. On its first day the book sold one million in hardcover and e-book versions in the U.S., the UK and Canada, making it the fastest selling adult novel in history. It was number one on the New York Times Best Seller list for hardcover fiction for the first six weeks of its release, and remained on the list for 29 weeks. As of January 2013, there were 30 million copies in print worldwide.",
        interview: null,
        picture: '/assets/img/9784047916319',
        price: 'eur 22.99',
        format: 'digital',
        copies_available: 50,
        isBestseller: false,
        isFavorite: true
    },

    {
        isbn: '978-9736976759',
        title: 'Inferno ',
        abstract: "Harvard professor Robert Langdon wakes up in a hospital in Florence, Italy with a head wound and no memory of the last few days. Dr. Sienna Brooks, one of the doctors tending to him, reveals that he is suffering from amnesia. When Vayentha, a female assassin, shows up in the hospital and kills Dr. Marconi, Brooks helps Langdon escape, and they flee to her apartment.\n" +
            "\n" +
            "After Brooks recounts the details of his admission to the hospital, Langdon finds a cylinder with a biohazard sign in his jacket and decides to call the U.S. consulate. He is told that they are searching for him and want his location. Per Brooks' guidance, he gives them a location across the street from her apartment to avoid getting Brooks more involved in his mysterious situation than she already is. Soon, Langdon sees Vayentha pull up to the location he gave the consulate. At this point, they both believe the U.S. government wants to kill him. Langdon then decides to open the container and finds a small medieval bone cylinder fitted with a hi-tech projector that displays a modified version of Botticelli's Map of Hell, which is based on Dante's Inferno.",
        fact_sheet: "Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons, The Da Vinci Code and The Lost Symbol. The book was published on May 14, 2013, ten years after publication of The Da Vinci Code (2003), by Doubleday. It was number one on the New York Times Best Seller list for hardcover fiction and Combined Print & E-book fiction for the first eleven weeks of its release, and also remained on the list of E-book fiction for the first seventeen weeks of its release. A film adaptation was released in the United States on October 28, 2016.\n" +
            "\n",
        interview: null,
        picture: '/assets/img/9789736976759',
        price: 'eur 23.70',
        format: 'paper',
        copies_available: 50,
        isBestseller: false,
        isFavorite: false
    },
    {
        isbn: '978-1635461169',
        title: 'Origin',
        abstract: "Edmond Kirsch, a billionaire philanthropist, computer scientist and futurist, as well as a strident atheist, attends a meeting in Catalonia with Roman Catholic Bishop Antonio Valdespino, Jewish moragi Yehuda Köves, and Muslim Imam Syed al-Fadl, three members of the Parliament of the World's Religions. He informs them that he has made a revolutionary discovery that he plans to release to the public in a month. He has chosen to inform them before the masses out of supposed respect, despite his well-known hatred of organized religion which he blames for his mother's death. Horrified, the three learn that he is presenting it in three days' time, prompting Valdespino to send him a voicemail demanding that he stop or risk being discredited.\n" +
            "\n" +
            "Nonetheless, Kirsch goes along with his plan, hosting the exclusive event at the Guggenheim Museum in Bilbao. Among those in attendance are Kirsch's former teacher, Robert Langdon, and the Guggenheim's curator Ambra Vidal, who helped organize the event, and is the fiancee of the future King of Spain, Prince Julián. Before the event, the guests receive a headset through which they communicate with a voice named Winston, which reveals to Langdon that it is actually an artificial intelligence invented by Kirsch. Winston leads Langdon to a private meeting with Kirsch, who reveals that his presentation will provide the answers to two of life's most important questions: \"Where did we come from?\" and \"Where are we going?\"",
        fact_sheet: "Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017 by Doubleday. The book is predominantly set in Spain and features minor sections in Dubai and Budapest.",
        interview: null,
        picture: '/assets/img/9781635461169',
        price: 'eur 14.50',
        format: 'digital',
        copies_available: 50,
        isBestseller: true,
        isFavorite: false
    },
    {
        isbn: '978-8825173659',
        title: 'Informatica teorica',
        abstract: "Computer science can be compared to an extraordinary plant, capable of varying the color of its flowers according to the environment in which it grows, capable of developing autonomously on a tall and robust stem, but more often to integrate with walls, trellises and others plants and enrich them with the beauty of its flowers and the taste of its fruits (but also to slip into small cracks with the risk of turning them into dangerous cracks). But like and more than any other plant, such a luxuriant development would not be possible without sound and deep roots. The roots of computer science - its principles, its theory - sink into history to the point of merging with those of mathematics and philosophy and extend far beyond a collection of definitions and yet fundamental mathematical properties: they must first be able to find their own way in the most diverse 'lands'; only in this way can they continue to feed the part of the plant visible on the surface. This text aims to accompany the reader 'underground', to discover what lies beneath the supercomputers, the web, social networks, unmanned vehicles etc .: understanding in depth the roots of the discipline will help develop the 'plant' both on the surface and below it",
        fact_sheet: "Theoretical computer science is a book by Dino Mandrioli, Carlo Ghezzi published by CittàStudi.",
        interview: null,
        picture: '/assets/img/9788825173659',
        price: 'eur 14.50',
        format: 'digital',
        copies_available: 50,
        isBestseller: false,
        isFavorite: true
    },
    {
        isbn: '978-8874880225',
        title: 'Esercizi di informatica teorica',
        abstract: "Computer science can be compared to an extraordinary plant, capable of varying the color of its flowers according to the environment in which it grows, capable of developing autonomously on a tall and robust stem, but more often to integrate with walls, trellises and others plants and enrich them with the beauty of its flowers and the taste of its fruits (but also to slip into small cracks with the risk of turning them into dangerous cracks). But like and more than any other plant, such a luxuriant development would not be possible without sound and deep roots. The roots of computer science - its principles, its theory - sink into history to the point of merging with those of mathematics and philosophy and extend far beyond a collection of definitions and yet fundamental mathematical properties: they must first be able to find their own way in the most diverse 'lands'; only in this way can they continue to feed the part of the plant visible on the surface. This text aims to accompany the reader 'underground', to discover what lies beneath the supercomputers, the web, social networks, unmanned vehicles etc .: understanding in depth the roots of the discipline will help develop the 'plant' both on the surface and below it",
        fact_sheet: "Exercise of Theoretical computer science is a book by Dino Mandrioli, Carlo Ghezzi published by CittàStudi.",
        interview: null,
        picture: '/assets/img/9788874880225',
        price: 'eur 14.50',
        format: 'digital',
        copies_available: 50,
        isBestseller: false,
        isFavorite: true
    },
    {
        isbn: '978-8838668487',
        title: 'Informatica: arte e mestiere',
        abstract: "The text is aimed at students of Computer Science Engineering courses and presents the theoretical foundations and the main application aspects of the discipline. The structure of the contents is modular: the first part of the volume covers the classic topics that constitute an introductory programming course, using C as the vector language, updated to C11. The second part describes the architecture of the computers to then deal with the basic software, the databases, the networks and user interfaces, moving \"from the inside to the outside\" of the computer system. This edition has been completely revised considering the latest technological developments. Numerous examples, included in the chapters, help the student to understand the subject as new contents are illustrated, while the exercises at the end of the chapter allow him to verify his own level of learning. The text is supplemented by five appendices illustrating technical details relating to the practical use of C.",
        fact_sheet: "The text presents the theoretical foundations and the main application aspects of the discipline. The first part of the volume covers the classic topics that constitute an introductory programming course, using C as the vector language. The second part describes the architecture of the computers and then deals with the basic software, databases, and networks. user interfaces, moving \"from the inside to the outside\" of the computer system. This edition was entirely.",
        interview: null,
        picture: '/assets/img/9788838668487',
        price: 'eur 14.50',
        format: 'digital',
        copies_available: 50,
        isBestseller: true,
        isFavorite: false
    },

    {
        isbn: '978-8871922041',
        title: 'Software engineering: fundamentals and principles',
        abstract: "With a concise and accurate style at the same time, the authors present the fundamental principles of software engineering and illustrate their application during all the different phases of the development of an application product. The leitmotif that links the treatment of the different chapters is the fundamental importance of a rigorous approach. Traditional textbooks on this topic generally follow the software development life cycle model - requirements analysis, specification, design, coding and maintenance - examining one phase at a time. In this book, instead, the emphasis was placed first on the correct identification of the fundamental principles, to then pass on to illustrate its application in all the different phases of the life cycle.",
        fact_sheet: "This text presents, with a concise and accurate style, the fundamental principles of software engineering, illustrating its application during the different phases of the development of an application product. The leitmotif that links the treatment of the different chapters is the emphasis that the authors place on the importance of a rigorous and formal approach. The book is designed for both undergraduate and postgraduate degrees, but the topics covered can also be used for the preparation of professional courses on various aspects of software engineering, and also allow a self-learning pathway.",
        interview: null,
        picture: '/assets/img/9788871922041',
        price: 'eur 30.90',
        format: 'paper',
        copies_available: 50,
        isBestseller: false,
        isFavorite: true
    },
  {
    isbn: '978-8636505700',
    title: 'The ultimate hitchhiker\'s guide',
    abstract: "Everyman Arthur Dent is rescued by his friend, Ford Prefect—an alien researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous work providing information about every planet in the universe—from the Earth just before it is destroyed by the alien Vogons. After being tossed out of the Vogon ship that they hitched a ride on, Arthur and Ford are rescued by the Heart of Gold, a spaceship driven by Zaphod Beeblebrox, Ford's semi-cousin and the President of the Galaxy. The ship's crew—Arthur, Ford, Zaphod, a depressed robot named Marvin, and a human woman by the name of Trillian—embark on a journey to find the legendary planet known as Magrathea, known for selling luxury planets.",
    fact_sheet: "The Hitchhiker's Guide to the Galaxy is the first of six books in the Hitchhiker's Guide to the Galaxy comedy science fiction \"trilogy\" by Douglas Adams. The novel is an adaptation of the first four parts of Adams' radio series of the same name. The novel was first published in London on 12 October 1979. It sold 250,000 copies in the first three months.[3]\n" +
        "\n" +
        "The namesake of the novel is The Hitchhiker's Guide to the Galaxy, a fictional guide book for hitchhikers (inspired by the Hitch-hiker's Guide to Europe) written in the form of an encyclopedia.",
    interview: null,
    picture: '/assets/img/9788636505700',
    price: 'eur 20.90',
    format: 'digital',
    copies_available: 50,
    isBestseller: true,
    isFavorite: true
  },
];

var authors = [
    {
        id: 1,
        firstname: 'Mark',
        lastname: 'Twain',
        picture: '/assets/img/author-1',
        bio: 'Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. His novels include The Adventures of Tom Sawyer (1876) and its sequel, the Adventures of Huckleberry Finn (1885),[2] the latter often called "The Great American Novel".Twain was raised in Hannibal, Missouri, which later provided the setting for Tom Sawyer and Huckleberry Finn. He served an apprenticeship with a printer and then worked as a typesetter, contributing articles to the newspaper of his older brother Orion Clemens. He later became a riverboat pilot on the Mississippi River before heading west to join Orion in Nevada. He referred humorously to his lack of success at mining, turning to journalism for the Virginia City Territorial Enterprise. His humorous story, "The Celebrated Jumping Frog of Calaveras County", was published in 1865, based on a story that he heard at Angels Hotel in Angels Camp, California, where he had spent some time as a miner. The short story brought international attention and was even translated into French.[4] His wit and satire, in prose and in speech, earned praise from critics and peers, and he was a friend to presidents, artists, industrialists, and European royalty.Twain earned a great deal of money from his writings and lectures, but he invested in ventures that lost most of it—such as the Paige Compositor, a mechanical typesetter that failed because of its complexity and imprecision. He filed for bankruptcy in the wake of these financial setbacks, but he eventually overcame his financial troubles with the help of Henry Huttleston Rogers. He chose to pay all his pre-bankruptcy creditors in full, even after he had no legal responsibility to do so. Twain was born shortly after an appearance of Halleys Comet, and he predicted that he would go out with it as well; he died the day after the comet returned. He was lauded as the greatest humorist this country has produced, and William Faulkner called him the father of American literature.',

    },
    {
        id: 2,
        firstname: 'Dan',
        lastname: 'Brown',
        picture: '/assets/img/author-2',
        bio: "Daniel Gerhard Brown (born June 22, 1964) is an American author most well known for his thriller novels, including the Robert Langdon stories, Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013) and Origin (2017). His novels are treasure hunts set in a 24-hour period,[2] and feature the recurring themes of cryptography, keys, symbols, codes, art, and conspiracy theories. His books have been translated into 57 languages, and as of 2012, sold over 200 million copies. Three of them, Angels & Demons (2000), The Da Vinci Code (2003) and Inferno (2013) have been adapted into films.Brown's novels that feature the lead character, Langdon, also include historical themes and Christianity as motifs, and have generated controversy. Brown states on his website that his books are not anti-Christian, though he is on a 'constant spiritual journey' himself, and says that his book The Da Vinci Code is simply 'an entertaining story that promotes spiritual discussion and debate' and suggests that the book may be used 'as a positive catalyst for introspection and exploration of our faith'."
    },
    {
        id: 3,
        firstname: 'Dino',
        lastname: 'Mandrioli',
        picture: '/assets/img/author-3',
        bio: "Dino Mandrioli was born on 5/3/49. He graduated in Engineering in July 1972 and in Mathematics in\n" +
            "June 1976. He was professor of Languages ​​and Translators at the Polytechnic of\n" +
            "Milan from 1976 to 1980; full professor of Information Processing Methods\n" +
            "at the University of Udine from 1981 to 1984; full professor of programming of the\n" +
            "Electronic Calculators at the Politecnico di Milano from 1984 to 1992; full professor of\n" +
            "Theoretical Computer Science at the Milan Polytechnic since 1992. President of the Council of\n" +
            "Degree in Computer Engineering from the Polytechnic from 1996 to 2001. Dean\n" +
            "of the Faculty of Information Engineering of the Polytechnic from 2007 to 2010.\n" +
            "He was a \"visiting professor\" at the universities of California in Los Angeles and Santa Barbara,\n" +
            "at the EPFL in Lausanne and at the Hewlett Packard research laboratories in Palo Alto.\n" +
            "Dino Mandrioli's research interests are mainly in the IT sector\n" +
            "theory, software engineering and real-time systems"
    },
    {
        id: 4,
        firstname: 'Carlo',
        lastname: 'Ghezzi',
        picture: '/assets/img/author-4',
        bio: "Carlo Ghezzi is a Professor and Chair of Software Engineering. He has been the Rector’s Delegate for research, a member of the Academic Senate and a Member of the Board of Governors of Politecnico. He also held positions as Department Chair and head of the PhD Program He has also been affiliated with: Università di Padova, University of California at Los Angeles, University of North Carolina at Chapel Hill, University of California at Santa Barbara (USA), Escuela Superior Latino-Americana de Informatica (Argentina), Technical University of Vienna and University of Klagenfurt (Austria), University of Lugano (Switzerland). He is a Fellow of the ACM and Fellow of the IEEE. He was awarded the ACM SIGSOFT Distinguished Service Award. He is a member of the Academy of Sciences (Accademia di Scienze e Lettere: Istituto Lombardo). He has been a member of several governmental committees and was the Italian representative in the EU Information Technology Committee during the 4th Framework Programme. He has been on the board of several international research projects and institutions in Europe, Japan, and the USA. His research interests are in all aspects of software engineering, and in particular on model-driven evolution and adaptation of dependable software. He is the author of more than 180 papers and 8 books. He coordinated numerous national and international (EU funded) research projects. See his personal Web page for more information."
    },
    {
        id: 5,
        firstname: 'Licia',
        lastname: 'Sbattella',
        picture: '/assets/img/author-5',
        bio: "Licia Sbattella – Master Degree in Bioengineering, Master Degree in Clinical Psychology, PhD in Computer Science and Specialization as Psychotherapist – is Associate  Professor of “Natural Language Processing” at the Dipartimento di Elettronica, Informazione e Bioingegneria of Politecnico di Milano. Since 1985 she has been involved in national and international research activities at Politecnico di Milano, at the Department of Computer Science University of Toronto (Canada), at the Faculty of Communication of Università della Svizzera Ialiana (Lugano, Switzerland), and at the Art Faculty of Charles De Gaulle University (Lille, France) dealing with computational linguistics, assistive technology, inclusive education, cognitive science, and multimedia accessible arts."
    },
    {
        id: 6,
        firstname: 'Stefano',
        lastname: 'Ceri',
        picture: '/assets/img/author-6',
        bio: "He is author of about 300 publications and of 10 books in English; his H-index is 72. His\n" +
            "research work covers over four decades (1976-2017) and has been generally concerned with\n" +
            "extending database technologies in order to incorporate new features: distribution, objectorientation, rules, streaming data; with the advent of the Web, his research has been targeted\n" +
            "towards the engineering of Web-based applications and search systems. More recently, he turned\n" +
            "to data science (social analytics) and to genomic computing. He is co-editor in chief (with Mike\n" +
            "Carey) of the book series \"Data Centric Systems and Applications\"](Springer-Verlag). He is coauthor of 3 US patents."
    },
    {
        id: 7,
        firstname: 'Paolo',
        lastname: 'Cremonesi',
        picture: '/assets/img/author-7',
        bio: "Paolo Cremonesi is an associated professor at the Politecnico di Milanowhere he teaches courses on Computer System Architectures, Performance and Reliability. Since joining the Politecnico di Milano he has been involved in the performance assessment and optimization of computer system architectures and applications, ranging from real-time embedded systems up to enterprise-wide datacenters. He's author of various publications concerning distributed and parallel computation, performance evaluation and capacity planning. Paolo Cremonesi was born in Bergamo (Italy) in 1967. In 1991 he joined the \"Von Karman Institute for Fluid Dynamics\" in Brussels for a four-month fellowship on supercomputing. In 1992 he received his master degree in Aerospace Engineering, summa cum laude, from the Politecnico di Milano. From 1992 until 1993 he worked with the \"Italian Electric Power Company (ENEL) on the realization of a parallel real-time supercomputer. He received his PhD in Computer Science from the Politecnico di Milano in 1996. From 2001 until 2006 he has been Editor of the Euromicro Journal of Systems Architecture, published by Elsevier. In 2001 he joined the Computer Science Departement of the Politecnico di Milano as an assistant professor and, in 2005, as associate professor."
    },
  {
    id: 8,
    firstname: 'Douglas',
    lastname: 'Adams',
    picture: '/assets/img/author-8',
    bio: "Adams was born on 11 March 1952 to Janet (née Donovan; 1927–2016) and Christopher Douglas Adams (1927–1985) in Cambridge.[3] The family moved to the East End of London a few months after his birth, where his sister, Susan, was born three years later.[4] His parents divorced in 1957; Douglas, Susan, and their mother moved to an RSPCA animal shelter in Brentwood, Essex, run by his maternal grandparents.Adams attended Primrose Hill Primary School in Brentwood. At nine, he passed the entrance exam for Brentwood School. He attended the prep school from 1959 to 1964, then the main school until December 1970. Adams was 6 feet (1.8 m) by age 12 and stopped growing at 6 feet 5 inches (1.96 m). His form master, Frank Halford, said Adams's height had made him stand out and that he had been self-conscious about it.[6][7] His ability to write stories made him well known in the school.[8] He became the only student ever to be awarded a ten out of ten by Halford for creative writing, something he remembered for the rest of his life, particularly when facing writer's block."
  },
];

var users = [

];

var events = [
    {
        id: 1,
        title: 'Dan Brown in Feltrinelli for his BestSeller "The Da Vinci Code"',
        description: 'Dan Brown, on Wednesday July 17th, will be in the famous Feltrinelli BookStore in Corso Buenos Aires for his BestSeller "The Da Vinci Code". Food and drink will be offered during the event.',
        location: 'Feltrinelli, Corso Buenos Aires, 33, 20124 Milano MI.',
        date: '17/07/2019',
        time: "from 5:30 p.m. to 8:00 p.m.",
        isbn: "978-5040861118",
        picture : '/assets/img/event-1'
    },
    {
        id: 2,
        title: 'Dan Brown in Mondadori for his new book "Digital Fortress"',
        description: 'Dan Brown, on Wednesday July 17th, will be in the famous Mondadori BookStore for his BestSeller "Digital Fortress". Food and drink will be offered during the event.',
        location: 'Mondadori, Via Giovanni Battista Pergolesi, 6, 20124 Milan MI.',
        date: '17/06/2019',
        time: "from 5:30 p.m. to 8:00 p.m.",
        isbn: "978-5170808533",
        picture : '/assets/img/event-2'
    },
  {
    id: 3,
    title: 'Dino Mandrioli and Carlo Ghezzi in DEIB for their new text book',
    description: 'Dino Mandrioli and Carlo Ghezzi, on Saturday July 19th, will be in DEIB department, building 21, room Emilio Gatti to present their new text book "Informatica teorica"',
    location: 'DEIB, Via Giuseppe Ponzio, 34, 20133 Milan MI.',
    date: '19/07/2019',
    time: "from 9:30 p.m. to 11:00 a.m.",
    isbn: "978-8825173659",
    picture : '/assets/img/event-3'
  },
  {
    id: 4,
    title: 'Dino Mandrioli and Carlo Ghezzi in DEIB for their new text book',
    description: 'Dino Mandrioli and Carlo Ghezzi, on Sunday July 20th, will be in DEIB department, building 21, room Emilio Gatti to present their new text book "Esercizi di Informatica teorica"',
    location: 'DEIB, Via Giuseppe Ponzio, 34, 20133 Milan MI.',
    date: '20/07/2019',
    time: "from 9:30 p.m. to 11:00 a.m.",
    isbn: "978-8874880225",
    picture : '/assets/img/event-3'
  },
  {
    id: 5,
    title: 'Dan Brown in Parco Sempione for his BestSeller "Origin"',
    description: 'Dan Brown, on Wednesday July 23th, will be in Parco Sempione, near Castello Sforzesco for his BestSeller "Origin". Food and drink will be offered during the event.',
    location: 'Piazza Sempione, 20154 Milano MI, 33.',
    date: '23/07/2019',
    time: "from 5:30 p.m. to 8:00 p.m.",
    isbn: "978-1635461169",
    picture : '/assets/img/event-5'
  }
];



var carts = [];


var genres = [
    {
        name: 'Novel',
        description: 'A novel is a relatively long work of narrative fiction, normally written in prose form, and which is typically published as a book. The entire genre has been seen as having "a continuous and comprehensive history of about two thousand years", with its origins in classical Greece and Rome, in medieval and early modern romance, and in the tradition of the Italian renaissance novella. (Since the 18th century, the term "novella", or "novelle" in German, has been used in English and other European languages to describe a long short story or a short novel.)',
    },
    {
        name: 'Biography',
        description:'A biography is simply an account or detailed description about the life of a person. It entails basic facts, such as childhood, education, career, relationships, family, and death. Biography is a literary genre that portrays the experiences of all these events occurring in the life of a person, mostly in a chronological order. Unlike a resume or profile, a biography provides a life story of a subject, highlighting different aspects of his of her life. A person who writes biographies, is called as a “biographer.”'
    },
    {
        name: 'Thriller',
        description:"Thriller is a broad genre of literature, film and television, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety. Successful examples of thrillers are the films of Alfred Hitchcock.Thrillers generally keep the audience on the 'edge of their seats' as the plot builds towards a climax. The cover-up of important information is a common element. Literary devices such as red herrings, plot twists, and cliffhangers are used extensively. A thriller is usually a villain-driven plot, whereby they present obstacles that the protagonist must overcome."
    },
    {
        name: 'Textbook',
        description:"Image result for university books define\n" +
            "A textbook is a comprehensive compilation of content in a branch of study. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools. Today, many textbooks are published in both print format and digital formats."
    }
];


var themes = [
    {
        name: 'Humanity',
        description: 'Humanity is the human race, which includes everyone on Earth. It’s also a word for the qualities that make us human, such as the ability to love and have compassion, be creative, and not be a robot or alien.'
    },
    {
        name: 'Self-Identity',
        description: 'The notion of the social self has been of particular interest in the social sciences because it reflects a concern with how people’s social behavior varies not only as a function of different social roles but also as a function of the kind of social others with whom a person interacts. '
    },
    {
        name: 'Love',
        description: 'Love encompasses a range of strong and positive emotional and mental states, from the most sublime virtue or good habit, the deepest interpersonal affection and to the simplest pleasure. An example of this range of meanings is that the love of a mother differs from the love of a spouse, which differs from the love of food. Most commonly, love refers to a feeling of strong attraction and emotional attachment. '
    },
    {
        name: 'Travelling',
        description: '“Travel is  fatal to prejudice, bigotry, and narrow mindedness., and many of our people need it sorely on these accounts.” ~ Mark Twain'
    },
    {
        name: "Religion",
        description: "Religion is a cultural system of designated behaviors and practices, morals, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that relates humanity to supernatural, transcendental, or spiritual elements. However, there is no scholarly consensus over what precisely constitutes a religion"
    },
    {
        name: "Conspiracy",
        description: "A conspiracy theory is an explanation of an event or situation that invokes a conspiracy by sinister and powerful actors, often political in motivation, when other explanations are more probable. The term has a pejorative connotation, implying that the appeal to a conspiracy is based on prejudice or insufficient evidence. Conspiracy theories resist falsification and are reinforced by circular reasoning: both evidence against the conspiracy and an absence of evidence for it, are re-interpreted as evidence of its truth, and the conspiracy becomes a matter of faith rather than proof."
    },
    {
        name: "Technology",
        description: "Technology is the collection of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings. Systems (e. g. machines) applying technology by taking an input, changing it according to the system's use, and then producing an outcome are referred to as technology systems or technological systems."
    },
    {
        name: "Ethics",
        description: "Ethics or moral philosophy is a branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong conduct. The field of ethics, along with aesthetics, concerns matters of value, and thus comprises the branch of philosophy called axiology. Ethics seeks to resolve questions of human morality by defining concepts such as good and evil, right and wrong, virtue and vice, justice and crime. As a field of intellectual inquiry, moral philosophy also is related to the fields of moral psychology, descriptive ethics, and value theory."
    },
    {
        name: "Informatics",
        description: "Informatics studies the representation, processing, and communication of\n" +
            "information in natural and engineered systems. It has computational, cognitive\n" +
            "and social aspects. The central notion is the transformation of information -\n" +
            "whether by computation or communication, whether by organisms or artifacts.\n" +
            "Understanding informational phenomena - such as computation, cognition, and\n" +
            "communication - enables technological advances. In turn, technological progress\n" +
            "prompts scientific enquiry. The science of information and the engineering of\n" +
            "information systems develop hand-in-hand. Informatics is the emerging discipline\n" +
            "that combines the two. "
    },
];


var aboutTheme = [
    {
        isbn: '978-8817153096',
        theme: 'Humanity'
    },
    {
        isbn: '978-8817153096',
        theme: 'Self-Identity'
    },
    {
        isbn: '978-5040861118',
        theme: 'Religion'
    },
    {
        isbn: '978-5040861118',
        theme: 'Conspiracy'
    },
    {
        isbn: '978-8071459316',
        theme: 'Religion'
    },
    {
        isbn: '978-8071459316',
        theme: 'Conspiracy'
    },
    {
        isbn: '978-5170808533',
        theme: 'Ethics'
    },
    {
        isbn: '978-5170808533',
        theme: 'Technology'
    },
    {
        isbn: '978-4047916319',
        theme: 'Conspiracy'
    },
    {
        isbn: '978-9736976759',
        theme: 'Conspiracy'
    },
    {
        isbn: '978-1635461169',
        theme: 'Conspiracy'
    },
    {
        isbn: '978-1635461169',
        theme: 'Religion'
    },
    {
        isbn: '978-8825173659',
        theme: 'Informatics'
    },
    {
        isbn: '978-8874880225',
        theme: 'Informatics'
    },
    {
        isbn: '978-8838668487',
        theme: 'Informatics'
    },
    {
        isbn: '978-8871922041',
        theme: 'Informatics'
    },
  {
    isbn: '978-8817153096',
    theme: 'Travelling'
  },
  {
    isbn: '978-1987683226',
    theme: 'Travelling'
  },
  {
    isbn: '978-8636505700',
    theme: 'Travelling'
  },
  {
    isbn: '978-5170808533',
    theme: 'Love'
  },
];

var inCart = [];


var ofGenre = [
    {
        isbn: '978-8817153096',
        genre: 'Novel'
    },
    {
        isbn: '978-1987683226',
        genre: 'Biography'
    },
    {
        isbn: '978-5040861118',
        genre: 'Thriller'
    },
    {
        isbn: '978-8071459316',
        genre: 'Thriller'
    },
    {
        isbn: '978-5170808533',
        genre: 'Thriller'
    },
    {
        isbn: '978-4047916319',
        genre: 'Thriller'
    },
    {
        isbn: '978-9736976759',
        genre: 'Thriller'
    },
    {
        isbn: '978-1635461169',
        genre: 'Thriller'
    },
    {
        isbn: '978-8825173659',
        genre: 'Textbook'
    },
    {
        isbn: '978-8874880225',
        genre: 'Textbook'
    },
    {
        isbn: '978-8838668487',
        genre: 'Textbook'
    },
    {
        isbn: '978-8871922041',
        genre: 'Textbook'
    },
  {
    isbn: '978-8636505700',
    genre: 'Novel'
  },
];



var promotesBook = [
    {
        author: 2,
        event: 1
    },
    {
        author: 2,
        event: 2
    },
  {
    author: 3,
    event: 3
  },
  {
    author: 4,
    event: 3
  },
  {
    author: 4,
    event: 4
  },
  {
    author: 3,
    event: 4
  },
  {
    author: 2,
    event: 5
  }

];

var purchases = [];


var reviews = [
    {
        id: 0,
        book: '978-1635461169',
        user: 1,
        stars: 3,
        text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
    },
    {
        id: 1,
        book: '978-1635461169',
        user: 2,
        stars: 4,
        text: 'What do we say to the God of the Death? Not today.'
    },
  {
    id: 2,
    book: '978-8071459316',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 3,
    book: '978-8071459316',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 4,
    book: '978-5170808533',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 5,
    book: '978-5170808533',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 6,
    book: '978-8874880225',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 7,
    book: '978-8874880225',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 8,
    book: '978-9736976759',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 9,
    book: '978-9736976759',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 10,
    book: '978-8825173659',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 11,
    book: '978-8825173659',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 12,
    book: '978-8838668487',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 13,
    book: '978-8838668487',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 14,
    book: '978-1987683226',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 15,
    book: '978-1987683226',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 16,
    book: '978-8871922041',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 17,
    book: '978-8871922041',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 18,
    book: '978-8817153096',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 19,
    book: '978-8817153096',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 20,
    book: '978-5040861118',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 21,
    book: '978-5040861118',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
  {
    id: 22,
    book: '978-4047916319',
    user: 1,
    stars: 3,
    text: "I wish I could give this 3.5 stars, but it doesn't warrant 4 in my opinion. I love Dan Brown's novels, his writing style, and his extensive use of history/tech in most of them, and I always learn something when I read his books. Robert Langdon is one of my favorite fictional characters. However, as this series moves on, it's more of the same. Brown has a plug and play format that he follows, and as I read this book, it's basically Robert Langdon at some educational/art venue where a friend/colleague, etc. asks for his presence only to witness a murder or event that threatens the world. < insert new villain here that is on a mission from God because his/her family was wronged>. Run to this historical place, find something they were looking for, find it quickly and then all is right again. There was supposed suspense, in that you want to find out what in the world Langdon's friend had to say before his murder--and of course, you have to wait until the end to find out. But I skimmed a lot of it because it was just more of the same. By the end of the book, I wasn't particularly enlightened by the so-called 'discovery that would change the world.' And, the side plot (that actually seems like part of the larger plot) of the Prince and Bishop was a distraction. The only part that was remotely interesting was the use of 'Winston' in the novel. I was hoping for something more original from Dan Brown, especially after paying $15.00. I wish he'd return to the days of Digital Fortress. He's such a talented writer, but if this is his whole mantra for novel writing, I'm not sure I'll buy the next one."
  },
  {
    id: 23,
    book: '978-4047916319',
    user: 2,
    stars: 4,
    text: 'What do we say to the God of the Death? Not today.'
  },
];

var similarTo = [
    {
        isbn1: "978-5040861118",
        isbn2: "978-8071459316"
    },
    {
        isbn1: "978-4047916319",
        isbn2: "978-8071459316"
    },
    {
        isbn1: "978-8874880225",
        isbn2: "978-8825173659"
    },
    {
        isbn1: "978-8838668487",
        isbn2: "978-8825173659"
    },
    {
        isbn1: "978-8874880225",
        isbn2: "978-8838668487"
    },
    {
        isbn1: "978-8871922041",
        isbn2: "978-8838668487"
    },
    {
        isbn1: "978-8874880225",
        isbn2: "978-8871922041"
    },
    {
        isbn1: "978-8871922041",
        isbn2: "978-8825173659"
    },
  {
    isbn1: "978-8817153096",
    isbn2: "978-1987683226"
  },
  {
    isbn1: "978-1635461169",
    isbn2: "978-4047916319"
  },
  {
    isbn1: "978-8636505700",
    isbn2: "978-8817153096"
  },
];

var writtenBy = [
    {
        isbn1: '978-8817153096',
        author: 1,
    },
    {
        isbn1: '978-1987683226',
        author: 1,
    },
    {
        isbn1: '978-5040861118',
        author: 2,
    },
    {
        isbn1: '978-8071459316',
        author: 2,
    },
    {
        isbn1: '978-5170808533',
        author: 2,
    },
    {
        isbn1: '978-4047916319',
        author: 2,
    },
    {
        isbn1: '978-9736976759',
        author: 2,
    },
    {
        isbn1: '978-1635461169',
        author: 2,
    },
    {
        isbn1: '978-8825173659',
        author: 3,
    },
    {
        isbn1: '978-8825173659',
        author: 4,
    },
    {
        isbn1: '978-8874880225',
        author: 3,
    },
    {
        isbn1: '978-8838668487',
        author: 3,
    },
    {
        isbn1: '978-8838668487',
        author: 5,
    },
    {
        isbn1: '978-8838668487',
        author: 6,
    },
    {
        isbn1: '978-8838668487',
        author: 7,
    },
    {
        isbn1: '978-8871922041',
        author: 3,
    },
    {
        isbn1: '978-8871922041',
        author: 4,
    },
  {
    isbn1: '978-8874880225',
    author: 4,
  },
  {
    isbn1: '978-8636505700',
    author: 8,
  },

];

module.exports = {
    books: books,
    authors: authors,
    genres: genres,
    themes: themes,
    aboutTheme: aboutTheme,
    ofGenre: ofGenre,
    events: events,
    users: users,
    reviews: reviews,
    writtenBy: writtenBy,
    promotesBook: promotesBook,
    similarTo: similarTo,
    carts: carts,
    inCart: inCart,
};