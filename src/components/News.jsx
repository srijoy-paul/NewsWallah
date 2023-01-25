import React, { useState } from 'react'
import NewsItem from "./NewsItem";

export default function News() {
    const newsData = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Morgan Rimmer",
            "title": "McCarthy officially denies Schiff and Swalwell seats on House Intelligence Committee - CNN",
            "description": "House Speaker Kevin McCarthy on Tuesday officially denied Democratic Reps. Adam Schiff and Eric Swalwell seats on the House Intelligence Committee.",
            "url": "https://www.cnn.com/2023/01/24/politics/mccarthy-democrats-schiff-swalwell-intelligence-committee/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230112115919-01-kevin-mccarthy-0112.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-25T12:07:00Z",
            "content": "House Speaker Kevin McCarthy on Tuesday officially denied Democratic Reps. Adam Schiff and Eric Swalwell seats on the House Intelligence Committee.\r\nI appreciate the loyalty you have to your Democrat… [+4024 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Germany confirms it will provide Ukraine with Leopard 2 tanks - BBC",
            "description": "Russia has downplayed the impact of the move, saying Western tanks will \"burn like all the rest\".",
            "url": "https://www.bbc.com/news/world-europe-64391272",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8386/production/_128407633_92fe3c9ba834b41badf48b96f1fcc7d3980b0583-1.jpg",
            "publishedAt": "2023-01-25T11:41:32Z",
            "content": "After weeks of reluctance, Germany has agreed to send Leopard 2 tanks to Ukraine, in what Kyiv hopes will be a game-changer on the battlefield.\r\nChancellor Olaf Scholz announced the decision to send … [+4355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Maddie Bender",
            "title": "Newly Discovered VEXAS Syndrome May Affect Thousands More Americans Than Thought - The Daily Beast",
            "description": "VEXAS syndrome was only discovered in 2020. And it may affect way more people than we thought.",
            "url": "https://www.thedailybeast.com/newly-discovered-vexas-syndrome-may-affect-thousands-more-americans-than-thought",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1299,w_2309,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1674595371/GettyImages-1358641846-2_o0g0gg",
            "publishedAt": "2023-01-25T11:15:35Z",
            "content": "The patient, Hector Campos, came into the emergency department with shortness of breath, erratic fever, and swollen, itchy ears. His wife explained that Campos had tested negative for COVID-19. What … [+6218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTLA Los Angeles"
            },
            "author": "Marc Sternfield",
            "title": "4.2 magnitude earthquake hits Southern California - KTLA Los Angeles",
            "description": "A 4.2 magnitude earthquake followed by a strong aftershock rattled Southern California early Wednesday morning, awaking thousands of people. There were no immediate reports of damage or injuries. The quake struck at 2:00 a.m. and was centered offshore, 16 kil…",
            "url": "https://ktla.com/news/local-news/4-2-magnitude-earthquake-hits-southern-california-epicenter-off-the-coast-of-los-angeles/",
            "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/01/quake.png?w=1280",
            "publishedAt": "2023-01-25T10:19:30Z",
            "content": "A 4.2 magnitude earthquake followed by a strong aftershock rattled Southern California early Wednesday morning, awaking thousands of people.\r\nThere were no immediate reports of damage or injuries.\r\nM… [+1312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Melissa Repko, Amelia Lucas",
            "title": "Inflation is cooling, but prices on many items are going to stay high for months - CNBC",
            "description": "As costs fall, some companies are still locked into long-term contracts or are boosting profits rather than lowering prices.",
            "url": "https://www.cnbc.com/2023/01/25/inflation-is-cooling-but-high-prices-will-stick-around.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106987751-1639146884641-gettyimages-1237112980-US-ECONOMY-INFLATION-ABOVE_TARGET.jpeg?v=1674640801&w=1920&h=1080",
            "publishedAt": "2023-01-25T10:00:01Z",
            "content": "A grocery store in New York.\r\nInflation may be cooling. But, for most Americans, the price of a cup of coffee or a bag of groceries hasn't budged.\r\nIn the months ahead, the big question is whether co… [+8979 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Green Nation"
            },
            "author": "Alexis Chassen",
            "title": "Jonathan Gannon recalls the last time he coached an NFC Championship Game at The Linc - Bleeding Green Nation",
            "description": "The Eagles’ defensive coordinator was on the Vikings coaching staff in 2017 season when the teams faced off for a division title, and he called it the best environment he’s ever been at or apart of.",
            "url": "https://www.bleedinggreennation.com/2023/1/25/23569672/jonathan-gannon-recalls-nfc-championship-vikings-the-linc-electric-environment-eagles",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/CiSR_9U5WKu_pky2yoOR47m9O-o=/32x0:1403x718/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24384101/Gannon4.JPG",
            "publishedAt": "2023-01-25T08:42:55Z",
            "content": "The Eagles 38-7 victory over the Giants to advance to the NFC Championship came on the 5-year anniversary of the 38-7 win over the Vikings that put the Eagles in the Super Bowl. Philadelphias Defensi… [+1775 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Moscow Times"
            },
            "author": "Daria Andriievska for AFP",
            "title": "Ukraine Dismisses Key Officials in Anti-Graft Purge - The Moscow Times",
            "description": "Kyiv on Tuesday announced the dismissal of a dozen top officials in its biggest political shakeup following the country's first major corruption scandal linked to the Russian invasion.",
            "url": "https://www.themoscowtimes.com/2023/01/25/ukraine-dismisses-key-officials-in-anti-graft-purge-a80025",
            "urlToImage": "https://static.themoscowtimes.com/image/og/84/80025__848b604d9298ecc330c3bcd600d80c15.jpg",
            "publishedAt": "2023-01-25T06:33:30Z",
            "content": "Kyiv on Tuesday announced the dismissal of a dozen top officials in its biggest political shakeup following the country's first major corruption scandal linked to the Russian invasion.\r\nUkraine has l… [+4129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "CLIPPERS at LAKERS | FULL GAME HIGHLIGHTS | January 24, 2023 - NBA",
            "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.Download now: https://app.li...",
            "url": "https://www.youtube.com/watch?v=-AlRxOmLAd4",
            "urlToImage": "https://i.ytimg.com/vi/-AlRxOmLAd4/maxresdefault.jpg",
            "publishedAt": "2023-01-25T05:34:19Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Scott Wilson, Mark Berman, Reis Thebault",
            "title": "California shootings came despite some of the nation's toughest gun laws - The Washington Post",
            "description": "A nation awash in guns — and a patchwork of state laws — has infused the push for restrictions with a sense of futility.",
            "url": "https://www.washingtonpost.com/nation/2023/01/24/california-shootings-despite-gun-laws/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/B5BM74U4III63E7AHBKR5CBDTQ.jpg&w=1440",
            "publishedAt": "2023-01-25T04:10:00Z",
            "content": "Comment on this story\r\nMONTEREY PARK, Calif. Californias efforts to reduce gun violence have long been a point of pride among the states liberal lawmakers. But a sense of futility and despair infused… [+9006 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jamie Gangel, Jeremy Herb, Evan Perez",
            "title": "First on CNN: Classified documents found at Pence's Indiana home - CNN",
            "description": "A lawyer for former Vice President Mike Pence discovered about a dozen documents marked as classified at Pence's Indiana home last week, and he has turned those classified records over to the FBI, multiple sources familiar with the matter told CNN.",
            "url": "https://www.cnn.com/2023/01/24/politics/pence-classified-documents-fbi/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230124121751-file-pence-november-2022.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-25T04:04:00Z",
            "content": "A lawyer for former Vice President Mike Pence discovered about a dozen documents marked as classified at Pences Indiana home last week, and he has turned those classified records over to the FBI, mul… [+10542 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Justin Roiland dropped from \"Rick and Morty\" by Adult Swim following domestic violence charges - CBS News",
            "description": "Justin Roiland co-created the animated sci-fi sitcom and has voiced its two title characters.",
            "url": "https://www.cbsnews.com/news/justin-roiland-rick-and-morty-adult-swim-cuts-ties-following-domestic-violence-charges/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/25/c2fc696e-a2f3-480d-b3f3-b7deb5795055/thumbnail/1200x630/571f787772c5e3db1262a9da16d8dcf1/gettyimages-888461318.jpg",
            "publishedAt": "2023-01-25T03:14:00Z",
            "content": "Adult Swim has cut ties with Justin Roiland, the co-creator of the popular animated series \"Rick and Morty,\" after he was charged with domestic violence earlier this month.\r\nAdult Swim has \"ended its… [+1460 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "2023 FULL First Round Mock Draft: Bucky Brooks 1.0 - NFL",
            "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
            "url": "https://www.youtube.com/watch?v=1C2B1WQPKis",
            "urlToImage": "https://i.ytimg.com/vi/1C2B1WQPKis/maxresdefault.jpg",
            "publishedAt": "2023-01-25T03:01:45Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Riley Keough 'Grateful' to Have Final Time With Mom Lisa Marie Presley Memorialized - Entertainment Tonight",
            "description": "Riley Keough reveals she's 'grateful' the last time she saw her mom, Lisa Marie Presley, before her untimely death was captured in a photograph. The 33-year-...",
            "url": "https://www.youtube.com/watch?v=jb7t8ZYQ1gQ",
            "urlToImage": "https://i.ytimg.com/vi/jb7t8ZYQ1gQ/maxresdefault.jpg",
            "publishedAt": "2023-01-25T02:30:14Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Carlos Greer",
            "title": "ABC brass adored T.J. Holmes, but some staff won't be sad to see him go - Page Six",
            "description": "Holmes allegedly yelled at staff and acted like he ran ABC, but performance reviews paint a picture of a meticulous journalist the company relied on.",
            "url": "https://pagesix.com/2023/01/24/abc-brass-adored-t-j-holmes-but-some-staff-loathed-him/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/01/ABC-producers-TJ-Holmes-replaces-GMA3-0012-1.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-01-25T01:19:00Z",
            "content": "If T.J. Holmes gets the boot because of his extra-marital activities, ABC brass will be sorry to lose a big up-and-coming talent. But Page Six hears that some production staff will breathe a big sigh… [+3960 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sarah Min",
            "title": "Microsoft shares are 'just north' of expensive after earnings, Tim Seymour says - CNBC",
            "description": "Microsoft shares were higher initially in extended trading after the tech giant reported earnings, then dipped lower.",
            "url": "https://www.cnbc.com/2023/01/24/microsoft-shares-are-just-north-of-expensive-after-earnings-tim-seymour-says.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107171454-1672168914998-gettyimages-1245840483-PORTUGAL_ECO.jpeg?v=1674607036&w=1920&h=1080",
            "publishedAt": "2023-01-25T00:37:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Amazon strikes: Workers claim robots are treated better - BBC",
            "description": "As Amazon's first ever UK strike gets under way, staff in Coventry tell the BBC why they are walking out.",
            "url": "https://www.bbc.com/news/business-64384287",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B3E1/production/_128394064_amazonworkers.jpg",
            "publishedAt": "2023-01-25T00:00:42Z",
            "content": "Amazon workers are staging the first ever UK strike against the online giant on Wednesday in a protest over pay.\r\nMembers of the GMB union are walking out at Amazon's Coventry warehouse over what the… [+6571 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Intercept"
            },
            "author": "Murtaza Hussain, Ryan Grim",
            "title": "Elon Musk Removes BBC Doc at Request of India PM Modi - The Intercept",
            "description": "Officials from India’s ruling right-wing party said American tech companies like Twitter and YouTube complied with demands to remove the documentary.",
            "url": "https://theintercept.com/2023/01/24/twitter-elon-musk-modi-india-bbc/",
            "urlToImage": "https://theintercept.imgix.net/wp-uploads/sites/1/2023/01/GettyImages-1246273459-modi-BBC-elon.jpg?auto=compress%2Cformat&q=90&fit=crop&w=1200&h=800",
            "publishedAt": "2023-01-24T23:51:00Z",
            "content": "Twitter and YouTube\r\n censored a report critical of Indian Prime Minister Narendra Modi in coordination with the government of India. Officials called for the Big Tech companies to take action agains… [+7160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Scott Feinberg",
            "title": "Feinberg Forecast: First Post-Nominations Read of the Oscars Landscape - Hollywood Reporter",
            "description": "THR's executive editor of awards analyzes the races for all 23 awards that will be presented on March 12.",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/2023-oscars-first-post-nominations-read-1235308948/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/everything-everywhere-top-gun-all-quiet-BP-WK-fabelmans-Split-Everett-H-2023.jpg?w=1024",
            "publishedAt": "2023-01-24T23:08:19Z",
            "content": "PLEASE NOTE: This forecast, assembled by The Hollywood Reporter’s executive editor of awards, Scott Feinberg, reflects Feinberg’s best attempt to predict the behavior of the Academy of Motion Picture… [+8453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "'Doomsday Clock' moves closer to midnight amid Ukraine war - DW (English)",
            "description": "A group of scientists and security experts have moved their \"Doomsday Clock\" to 90 seconds to midnight, their most pessimistic prognosis yet. They published their statement in Russian and Ukrainian for the first time.",
            "url": "https://www.dw.com/en/doomsday-clock-moves-closer-to-midnight-amid-ukraine-war/a-64503629",
            "urlToImage": "https://static.dw.com/image/64503700_6.jpg",
            "publishedAt": "2023-01-24T21:42:33Z",
            "content": "The Bulletin of the Atomic Scientists on Tuesday set its symbolic \"Doomsday Clock\"\r\n closer to midnight than ever before, noting threats of nuclear war, disease and climate volatility had been exacer… [+5342 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "MacBook Pro 14-inch review (2023): A blessing for creatives - Engadget",
            "description": "The new MacBook Pro 14-inch isn't a dramatic departure from the last model, but the new M2 Pro and M2 Max chips will be incredibly useful to creative profess...",
            "url": "https://www.youtube.com/watch?v=5HxfX4mEAwc",
            "urlToImage": "https://i.ytimg.com/vi/5HxfX4mEAwc/maxresdefault.jpg",
            "publishedAt": "2023-01-24T21:12:53Z",
            "content": null
        }
    ];

    const [news, setNews] = useState({
        newsArticles: newsData,
        loading: false,
    })

    return (
        <div className='container my-3'>
            <h1>TopNews - Headlines</h1>
            <div className='my-2  border d-flex gap-3 flex-wrap justify-content-center'>
                {news.newsArticles.map((element) => {
                    {/* console.log(element); */ }
                    return <NewsItem imgUrl={element.urlToImage} newsTitle={element.title} newsDesc={element.description} key={element.url} />
                })}
                {/* <NewsItem imgUrl="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0125%2Fr1122115_1296x729_16%2D9.jpg" newsTitle="Georgia AD - Crash victims were not on athletic department business" newsDesc="In Georgia's most extensive comments on the wreck that killed football player Devin Willock and a recruiting staff member, athletic director Josh Brooks said Tuesday the two were not on athletic department business at the time of the incident." /> */}

            </div>
        </div>
    )
}
