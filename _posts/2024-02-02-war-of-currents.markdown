---
layout: post
title:  "Technology, Lawfare, and Finance in the Birth of Electricity"
date:   2024-02-02 19:00:00 +0000
permalink: "/war-of-currents/"
slug: "war-of-currents"
---

> “The American way is to make money by creating wealth, not by suing people.”
> --Paul Graham

In the late 19th century, it was an open technological and economical question if the US electrical grid would be built with alternating current (AC) or direct current (DC). Both sides had strong inventors and financiers, with [Thomas Edison](https://en.wikipedia.org/wiki/Thomas_Edison) backed by [J.P. Morgan](https://en.wikipedia.org/wiki/J._P._Morgan) strongly favoring a DC grid, while [Nikola Tesla](https://en.wikipedia.org/wiki/Nikola_Tesla) and [George Westinghouse](https://en.wikipedia.org/wiki/George_Westinghouse) favoring an AC grid.

Despite the pressure of patents, financiers, and the public, I argue that the technology intrinsics are determinative and drive the other pivot points in the path to infrastructure paradigm shifts. The adoption of AC could have looked very different, but I argue that AC would win no matter what as it was the superior technology at the time.

This is not to say that developing great technology would be sufficient for lasting success. Capturing value and a smart use of social technologies matter just as much in the process of commercialisation. This is exemplified by the rivalry between Edison and Westinghouse and their respective companies.

I think young technologists should look to history for how different social arrangements at the time shaped the way technology was developed and adopted and how actors used these social technologies for their advantage. In writing this piece, I hope to show that there is a push-pull relationship between the invention of technology and the creation of social devices – technology can lead to the creation of new social devices and social devices can lead to the invention of new technology. But in the end, technology always wins.


## Backstory: The War on the Currents<a id="backstory-the-war-on-the-currents"></a>

["The War on the Currents"](https://en.wikipedia.org/wiki/War_of_the_currents) refers to the historical battle from around 1886 to 1892 between the proponents of [direct current](https://en.wikipedia.org/wiki/Direct_current) and [alternating current](https://en.wikipedia.org/wiki/Alternating_current) in deciding which technology to adopt for building the electrical grid of the United States.

Presently, most consumer electronics like cellphones, LI batteries, or electric vehicles use DC. We use AC mostly to transmit electricity over long distances via high voltage lines.

In the early 1800s, electric light had not yet been invented in the United States. From the 1820s onwards, gas lamps were installed in public places in major cities across the United States. However, gas lamps could not be installed in homes at scale and needed a constant supply of gas.

Moreover, our understanding of electricity transmission was still in its early stages in the early 1800s. For instance, [electromagnetic induction](https://en.wikipedia.org/wiki/Electromagnetic_induction) and [self-induction](https://en.wikipedia.org/wiki/Inductance) were only discovered in 1831 and 1832 respectively, and turned out to be crucial in our understanding of electricity transmission.

Building on these discoveries, from the 1870s onwards, Thomas Edison and George Westinghouse competed for supremacy in the nascent electricity industry, engaging in battles over lightbulb patents, advocating for their respective standards in electricity transmission (DC for Edison and AC for Westinghouse/Tesla), and introducing new electric devices leveraging their chosen electricity standard (for instance, [arc lamp](https://en.wikipedia.org/wiki/Arc_lamp) street lighting for AC and [incandescent lighting](https://en.wikipedia.org/wiki/Incandescent_light_bulb) for DC).

The rivalry aimed not only at establishing an efficient electric grid but also at fulfilling the broader societal aspiration of bringing electric light to every home in the United States.


### Technological Intrinsics: AC versus DC<a id="technological-intrinsics-ac-versus-dc"></a>

The core challenge of building the energy grid of the United States was figuring out a way to transfer electricity over long distances without energy losses rendering it economically and technically infeasible. Energy transmission always involves losses because of resistive, capacitive, and inductive line losses. Transferring electricity over hundreds of miles requires small losses which were not technically achievable using DC at the time. This is what was called the **distance problem** of energy transmission.

We can demonstrate the severity of the distance problem by comparing the voltage losses between a cable with 12V 5A DC and another cable with 120V 0.5A DC. As a rule of thumb, the first cable experiences a loss of approximately [4% of its initial voltage](https://www.calculator.net/voltage-drop-calculator.html?necmaterial=copper\&necwiresize=6\&necconduit=steel\&necpf=0.85\&material=copper\&wiresize=33.31\&resistance=1.2\&resistanceunit=okm\&voltage=12\&phase=dc\&noofconductor=1\&distance=100\&distanceunit=meters\&amperes=3\&x=Calculate\&ctype=nec) over a distance of only one hundred meters (330 feet). In contrast, the second cable experiences only a 0.07% loss of the initial voltage. Evidently, high-voltage and low-current electricity exhibit lower losses for long-distance transmission.

For illustration of this observation, we can use [Joule’s Law](https://en.wikipedia.org/wiki/Joule_heating) and [Ohm’s Law](https://en.wikipedia.org/wiki/Ohm%27s_law). Joule’s Law states that $$P=I^2*R,$$ where $$P$$ is the power loss in an electrical circuit, $$I$$ is the electric current, and $$R$$ the resistance. The lower the electric current, the lower the resistive losses in a conductor. Combining this with Ohm’s law $$R=\frac{U}{I},$$ we get that an increase in voltage leads to a decrease in electric current, keeping the resistance equal.

Today, we use voltages for long-distance AC transmission in the 100kV to 1MV range. However, household applications need voltages in the 100-300V range. If we want to leverage high voltages for long-distance transmission, we need an electric device that can increase and decrease the voltage as needed.

In the late 19th century, such a device did exist: the [transformer](https://en.wikipedia.org/wiki/Transformer). Transformers can be used to transform low-voltage, high-current electricity to high-voltage, low-current electricity, and vice versa. 

However, the transformers of the late 19th century had one major limitation: They only worked with alternating current and not with direct current. An equivalent device for DC, called [DC-to-DC converter](https://en.wikipedia.org/wiki/DC-to-DC_converter), was only invented in the 20th century.

Without the ability to use transformers, direct current was economically and technically doomed because the energy losses of transmitting DC at voltages in the household range were just too high. So high, in fact, that Thomas Edison needed a new power plant every mile or so to ensure that all households connected to it would receive sufficient energy to run a lightbulb.

As a result, DC won the _War of the Currents_. In 1902, the United States had [61% of generating capacity](https://en.wikipedia.org/wiki/Electrification#cite_note-FOOTNOTEHunterBryant1991253,_Note_18-41) based on AC which increased to 95% in 1917.

Today, we use [high-voltage DC (HVDC) electricity transmission](https://en.wikipedia.org/wiki/High-voltage_direct_current). It works because we have found ways to increase and decrease the voltage for DC current using tools like a DC-to-DC converter. For long distances, DC lines are sometimes more effective than AC lines because AC lines have higher inductive resistance at long distances.

Another challenge for today’s AC-based electric grid is a growing share of DC generating capacity through renewable energy sources – like solar panels – and a growing DC consumption through new mass-market products like electric vehicles (EVs) with DC batteries. Reconciling the growing supply and demand of DC with a predominately AC-based grid, we need to transform DC to AC and AC to DC more frequently, resulting in increased energy losses.

For illustration, using an AC battery to save the excess energy of solar panels at down hours we need two of those transformations. Initially, the DC generated by the solar panels must be transformed into AC for storage. Subsequently, when the stored electricity is utilized, it undergoes a transformation from AC back to DC.

One way to increase the cost-effectiveness of renewable energy has been to build DC-based [micro-grids for industrial complexes, residential areas](https://www.ledsmagazine.com/connected-ssl-controls/article/14276366/microgrids-deliver-distributed-energy-for-smart-buildings-and-cities), or energy-intensive industries such as [manufacturing or semiconductors](https://www.ledsmagazine.com/connected-ssl-controls/article/14295600/energy-efficiency-the-rise-of-dc-microgrids). One startup in the space is [Direct Energy Partners](https://www.directenergypartners.com/).


### Why was there a “War of the Currents” if AC was superior?<a id="why-was-there-a-war-of-current-if-ac-was-superior"></a>

In hindsight, it is obvious that AC would have won the _War of the Currents_ every time. AC was not only technologically superior for the reasons mentioned above but there was also no realistic pathway to make DC economically viable at the time – especially for areas less dense than cities like NYC. 

Edison’s bet on DC despite the superiority of AC might have been motivated by his large commercial interests in DC winning and his accumulation of non-technological assets: He held most of the relevant patents for DC, had a first-mover advantage, better financing through J.P. Morgan, more lobbying power in the US, and used public relations in an attempt to associate AC with the cruelty of the electric chair.

Specifically, Edison fought AC’s economic and technological superiority on three fronts using social technologies: patents, financiers, and in public opinion.

In the following, I will unpack how these different advantages looked like for Edison, how they shaped the fight around technology adoption, and why they were not sufficient in the end.


### DC gains initial traction in the early 1880s<a id="dc-gains-initial-traction-in-the-early-1880s"></a>

When Edison’s patent for an incandescent light bulb was granted in 1879, there was very limited infrastructure for electricity transmission in New York City. Previous infrastructure for energy transmission (e.g., steam, gas, and coal) did not aid in mass adoption and severely limited the range for energy transmission.

In 1882, the Edison Illuminating Company set up its [first power station in Pearl Street, Manhattan in 1882](https://cooperatornews.com/article/gaslights-to-generators) with a capacity to power 800 light bulbs. It was expanded to around 13,000 around a year later. 

But the early adoption of DC already proved to be challenging: It required a large generator that could power only small regions of New York City and they needed to connect houses with [thick copper wires](https://ethw.org/Edison%27s_Electric_Light_and_Power_System) to reduce even stronger energy losses along the way of transportation.

Initially, Edison appeared unusually well-positioned to succeed as he was backed by the legendary financier J.P. Morgan. Morgan was among the first financiers willing to bet on technological breakthroughs and took high risks both by investing in Edison’s company and being the first to successfully electrify his home and to install Edison’s light bulbs in his home and office building. When Morgan hosted a large gathering with members of NYC’s elite, some ordered the electrification of their home immediately afterwards.

Financial backing was pivotal for Edison’s initial success, as the demand for the lightbulb induced demand for the electrification of homes. Edison’s lightbulb was among the first devices that required electricity in homes, whereas the arc light was exclusively used for outside lighting and only required electric lines over the streets.

Additionally, light bulb sales mattered in the early days of electricity adoption because it brought in critical revenue for future infrastructure and R&D investments and to achieve profitability to stay in business. In 1881, there were only a handful of electrified homes while a lightbulb [cost around $1](https://www.seattletimes.com/entertainment/books/lsquothe-age-of-edisonrsquo-the-light-bulb-creates-a-new-era/) which equates to around [$30 today](https://www.in2013dollars.com/us/inflation/1881?amount=1) adjusted for inflation – broadly equivalent to a worker’s daily pay. In 1910, less than 15% of American homes were electrified but the cost for a lightbulb had fallen by more than 80% to only 17 cents (around [$5.50 today](https://www.in2013dollars.com/us/inflation/1910?amount=0.17)).

What later turned out to be the biggest problems for DC adoption – the distance problem and the high costs – were circumvented in the early 1880s as distribution was initially limited to elites in NYC who could afford to pay the relatively high price for a lightbulb and lived within a dense area.

As we will see, Thomas Edison’s strong initial position did not lead to success as the impact of DC’s disadvantages became stronger over time as distribution widened.


### The Rapid Rise of AC<a id="the-rapid-rise-of-ac"></a>

AC saw a rapid rise in the late 19th century in the US. In 1882, AC electricity transmission and AC devices had not been shown to work in the US yet. In 1893, Westinghouse won two incredibly important bids with his AC technology: The electrification of The Chicago World's Fair in 1893 and the Niagara Falls generation project in 1893. By 1902, the AC system installed at the [Niagara Falls provided **one-fifth** of the American electric power supply](https://www.freeingenergy.com/edison-vs-tesla-how-electrocuting-elephants-and-other-stunts-led-to-the-modern-grid-part-2-of-3/). How was this rapid rise of AC possible?

Not surprisingly, AC proved to be cheaper than DC. For the Chicago Fair, General Electric's DC bid was $554,000 while Westinghouse’s AC bid was just $399,000. For the Niagara Falls, AC was useful because it could easily transport the electricity over 26 miles to power Buffalo, NY.

Moreover, AC found powerful backers – both financial and technological. Among them, the most prominent actors were inventor Nikolai Tesla who worked with entrepreneur and engineer George Westinghouse in later years, and businessman Charles Coffin from the Thomas-Houston Electric Company who competed with Westinghouse and later merged with Edison’s company.

Initially, Westinghouse was working on DC products himself. However, a patent lawsuit with Edison made it increasingly hard for Westinghouse to come up with products that were sufficiently differentiated from Edison’s products to avoid patent infringements.

In 1885, Westinghouse became aware of the new European alternating current systems and began experimenting with AC networks in Pittsburgh.

He became increasingly committed to AC for economic and legal reasons. First, he noticed potential economies of scale advantages: Using AC, he could potentially serve larger areas at lower costs than Edison. Second, switching his products to AC would avoid most legal risks and would massively reduce the threat of Edison’s impending lawsuit that could force him to stop selling his DC products, if successful.

Nikola Tesla was originally Thomas Edison’s apprentice. However, Tesla left the company after only six months in 1885. In 1888, Tesla started working with Westinghouse after Westinghouse recognised his technical finesse and ambition. Westinghouse agreed to a generous licensing deal that allowed him to use Tesla’s patents for his AC motor and transformer designs.

With that in place, Westinghouse had assembled most critical pieces required to start building an AC-based electrical grid. His bet on AC was rewarded in the years that followed and led to his victory over Edison.


## Edison’s Anti-AC PR Battle<a id="edisons-anti-ac-pr-battle"></a>

Building the electric grid and the AC/DC rivalry naturally attracted much public attention. But electricity was not just another invention, it had a unique effect on public psychology.

Electricity was poorly understood by the American public at the time and the “invisible force” of electricity could have disastrous effects if not used cautiously. Furthermore, harnessing electricity for everyday use for many felt like a Prometheus-like act.

Public fear was further increased by accidental electrocutions of construction workers. Within a two-year period in New York, [ninety accidental electrocutions](https://daily.jstor.org/the-fatal-current-electrocution-as-progress/) occured.  These accidents resulted in public resentment against high voltage AC and Brush Electric's corporate practices. The accidental electrocution of line worker John Feeks in front of a crowd in New York City is called the [“Electric Wire Panic”](https://erenow.org/common/edison-and-the-electric-chair/17.php) and was probably the peak in public fear.

Building on these existing fears, Edison found fertile ground to try amplifying anti-AC sentiments in the population using propaganda and misinformation. If he could redirect public outcry over electricity risks to AC risks, Edison expected he could further stigmatize AC or potentially get AC banned entirely.

Edison likely colluded with engineer [Harold P. Brown](https://en.wikipedia.org/wiki/Harold_P._Brown) who demonstrated the alleged dangers of AC by publicly electrocuting animals. Brown also lobbied to limit AC transmission line voltages to 300 volts which would have massively reduced its superiority over AC.


### The Electric Chair <a id="the-electric-chair"></a>

For the government at the time, these instantaneous deaths were turned from a bug to a feature with the invention of the electric chair.

In an attempt to associate AC with executions, Edison and Brown lobbied for the adoption of an electric chair running on AC – despite Edison’s stance against capital punishments. Edison went as far to suggest replacing the term electrocution with being ["Westinghoused”](https://www.smithsonianmag.com/history/edison-vs-westinghouse-a-shocking-rivalry-102146036/) and said that [AC would kill a man “in the ten-thousandth part of a second.”](https://www.smithsonianmag.com/history/edison-vs-westinghouse-a-shocking-rivalry-102146036/)

A friend of Westinghouse’s, William Cockran, filed an appeal to the Supreme Court in an attempt to stop the use of an electric chair running on AC and argued that the punishment was “cruel and unusual” punishment which is against the US constitutions.

The appeal failed and Kemmler was executed using an electric chair running on AC on August 6, 1890. However, the procedure was not finished in microseconds but took eight minutes instead. It was described as cruel and inhumane and Kemmler died an incredibly slow and painful death as he was basically cooked alive.

After 1889, public opinion started to slowly turn against Edison as Edison’s smear tactics were [exposed to the public](https://en.wikipedia.org/wiki/War_of_the_currents#Brown's_collusion_exposed) and the economic and technological superiority of AC became more and more obvious.


## The Age of Patents and Lawyers<a id="the-age-of-patents-and-lawyers"></a>

The _War of the Currents_ involved various lawsuits and indicates a clear tendency for corporate competition to become more legalized.


### Patent Monopolies<a id="patent-monopolies"></a>

In the late 19th century, the US saw a series of inventions with the potential to change the day-to-day of every American – the telegraph, the telephone, the lightbulb, and electricity, etc.

For each of these inventions, there was more than one inventor working on a similar technology and competition to get to market first. Competition between inventors was increased by a permissive patent office. Approved patents often had a wide-reaching scope of what counted as patent infringement.

The wide-reaching scope of patents and the libertarian patent policies of the time also led to an increase in patent lawsuits. Some of these lawsuits are still used as precedents today.

For instance, the lawsuit Hotchkiss v. Greenwood in 1850 established the concept that a new invention that seeks patent protection cannot be obvious to a person of average skill in the craft.

It is unclear which way the casual relationship goes between patents and innovation in this case.

The opportunity to start an electricity monopoly from scratch protected by wide-reaching patents was one reason for Edison’s dogmatic stance for DC as well as J.P. Morgan’s generous financial backing. 

These incentives were also reason enough to pursue numerous and more complex patent lawsuits for competitors of patent holders in an attempt to prevent or break their monopolies.


### Edison’s Patent Infringement Lawsuit<a id="edisons-patent-infringement-lawsuit"></a>

In Edison’s attempt to build a DC monopoly, Edison sued Westinghouse in 1888 over patent infringements for the incandescent light bulb in an attempt to take Westinghouse’s products off the market. 

As outlined above, lightbulb sales brought in critical revenue for future investments. Edison wanted to cut Westinghouse off from this critical revenue from lightbulb sales and drive him out of business this way. His legal strategy was to overwhelm Westinghouse with paperwork – [filing a total of 312 lawsuits against Westinghouse](https://novelhistorian.com/2021/10/04/seeing-the-light-the-last-days-of-night/) and his suppliers and friends.

In response, Westinghouse fought the patent battles on two grounds:

First, he acquired patents for alternative lightbulb concepts to come up with lightbulbs that he could continue to sell in the case he lost the lawsuit against Edison. For that purpose, in 1888, Westinghouse acquired a company called Consolidated Electric Light which included the patents filed by the two inventors William Sawyer and Albon Man. They hold patents for a so-called [“stopper lamp”](https://artsandculture.google.com/asset/westinghouse-stopper-lamp-george-westinghouse-1846-1914/VAERtVcOrJBMPg?hl=en) that had been held up in court against Edison’s patents.

Second, Westinghouse and his lawyer tried prolonging the lawsuit as much as possible. A delayed verdict was a victory for Westinghouse as in the interim he could continue to sell his light bulbs during that time – as there was no injunction.


### Legal Innovation: The Cravath System<a id="legal-innovation-the-cravath-system"></a>

George Westinghouse appointed the young Paul Drennan Cravath to be his lawyer in the patent lawsuit. Cravath would later become a partner of the law firm that is known today as Cravath, Swaine & Moore. In order to handle the unprecedented amount of paperwork involved in these trials, Cravath came up with what is known today as the [“Cravath System”](https://en.wikipedia.org/wiki/Cravath_System).

The core strategy of the Cravath system was to hire associates that were assigned to a partner for a limited amount of time. In that capacity, the partner would translate a complex case into smaller pieces of schlep work that would be executed by an associate. Many law firms still rely on successors of the Cravath system.

In late 1895, Westinghouse and Cravath lost the lawsuit in the Supreme Court. The court ruled that the patents that Westinghouse acquired [“are too indefinite to be the subject of a valid monopoly”](https://supreme.justia.com/cases/federal/us/159/465/).

However, the victory in court was a pyrrhic victory for Edison because the [Edison patent](https://patents.google.com/patent/US223898A/en) was due to expire in early 1897 after the lawsuit had dragged on for years. Moreover, the court affirmed that Westinghouse’s [alternative lightbulb designs were not protected by the Edison patent](https://www.ucl.ac.uk/ibil/case-studies/2019/mar/myth-3-edisons-incandescent-lamp-patent-retarded-lamp-development). As Westinghouse had finished the development of an alternative lightbulb design at the time of the verdict, the result of the lawsuit had only limited impact on the Westinghouse business.

While patent lawsuits were not unique to the nascent electrical industry, patent lawsuits did become central to the strategy of each electricity company because the commercial opportunity of an electricity monopoly protected by patents was incredibly appealing. For illustration, the patent lawsuit Edison vs. Westinghouse had [damages estimated at around one billion dollars](https://www.mprnews.org/story/2016/08/15/npr-books-last-days-of-night) (around $25bn today).

However, electricity companies could afford to appeal the rulings of every instance while continuing to violate patents as the lawsuit dragged on – the benefit of continuing to sell lightbulbs in the markets was higher than the anticipated legal costs.

As a result, these lawsuits became more complex and had higher stakes than ever before and gave birth to patent litigation as an industry.


## Monopolization and The Age of Financiers<a id="monopolization-and-the-age-of-financiers"></a>

The major inventors of their time – Edison, Westinghouse, Tesla, Bell, among others – were all bankrolled by members of the financial elite of the East Coast. The financial backing was necessary to fund required initial investments.

Around 1888, most electricity companies were still operating at losses. R&D and infrastructure investments were capital-intensive and only yielded returns years later. To build up initial demand, the electricity companies often subsidized their products in the hope that scaling effects would recur in costs as more customers were connected to the grid.

At the same time, there were around fifteen relevant electric companies competing for market share in the nascent electricity market. The three major companies at the time were: Westinghouse, Edison General Electric, and Thomson-Houston. High competition increased pricing pressure even more.

In this highly competitive environment, Edison was struggling to realize the monopoly he envisioned when he filed for his patents years earlier and J.P. Morgan grew increasingly frustrated with his investment.


### Consolidation Driven by Financier’s interests<a id="consolidation-driven-by-financiers-interests"></a>

In 1889, Edison lost majority control of his company in a merger that led to the formation of _Edison General Electric_. In the same year, some subsidiaries of his company started to lobby for the use of AC technology and in 1890, Edison Machine Works began developing AC-based equipment.

In 1890, Thomas Edison's dogmatic stance against AC was the main reason for the continuation of the _War of the Currents_. However, it slowly became obvious that Edison’s decisions were actively hurting his electricity company as [Edison’s profits were much lower than Westinghouse’s profits.](https://www.myussi.com/glossary/thomas-a-edison/) Edison was under increasing pressure from inside the company and increasingly from J.P. Morgan himself.

Three years later in 1892, Edison’s financier J.P. Morgan decided to oust Edison. Morgan engineered a deal behind the backs of the management of _Edison General Electric_ and Thomas Edison to merge with AC-proponent _Thomson-Houston._ He put Thomson-Houston’s board in charge of the new company that was now called _General Electric_. Edison’s name was removed and the new management decided that General Electric would use AC in the future.

The rapid consolidation between 1888 and 1893 was driven by a financial downturn in 1890/91, the [Baring crisis](https://en.wikipedia.org/wiki/Baring_crisis), that caused all electricity companies major cash flow issues as lenders called back their loans.


### The War of the Currents ends and Monopolies Emerge<a id="the-war-of-the-currents-ends-and-monopolies-emerge"></a>

The removal of Edison and GE’s turn to AC effectively ended the _War of the Currents_ as there was no company left that favored DC.

In 1896, after a long and costly patent litigation battle and failed takeover attempts, General Electric and Westinghouse signed a patent sharing agreement to avoid further litigation and the high costs involved.

Westinghouse and GE granted each other [licensing agreements for all patents](https://go.gale.com/ps/i.do?p=AONE\&u=googlescholar\&id=GALE%7CA14336579\&v=2.1\&it=r\&sid=AONE\&asid=104a60e4), other than GE’s lightbulb patents. The agreement was in GE’s favor and was a first step in GE’s rise to dominance. Later, GE established a monopoly in the lighting market which led to an immediate[ price increase of around 30%](https://go.gale.com/ps/i.do?p=AONE\&u=googlescholar\&id=GALE%7CA14336579\&v=2.1\&it=r\&sid=AONE\&asid=104a60e4). But this is an episode that is outside the scope of this post.

Did Thomas Edison actually know that AC was superior? After some research, there seems to be [little consensus among different biographers](https://www.nj.com/middlesex/2013/02/oatmeal_comic_about_tesla_and.html) and historians.


## Conclusions<a id="conclusions"></a>

In closing, here are my thoughts on what we can learn about the link between technological progress and new social technologies from the _War of the Currents_.

First, patent fights, associate systems, and public relations battles waged by technologists are downstream from technology development. For instance, Cravath’s law firm reacted to the changing needs of George Westinghouse by inventing new social technologies such as the Cravath system.

Although these social inventions seem determinative in the fog of war, the characteristics of technology itself carves the path for technology adoption. As contemporaries, we cannot trust that initially successful social institutions are good predictors of technological superiority and it is easy to overstate their importance. However, we can trust that newly emerging social institutions are usually good predictors of a change in the way companies compete – the emergence of the associate system pointed to a legalized future of competition in the electricity business.

Moreover, the _War of the Currents_ is a counterexample to the argument that only social innovations – such as the creation of the Limited Liability Company – lead to technological innovation – like the emergence of VCs.

Second, public infrastructure projects create different competitive dynamics. Given the wide reach of patents at the time, we would expect less competition on priors. However, the market opportunity of creating the electric grid for the United States was huge. These high stakes were strong enough reasons for commercial actors to invent new social technologies to sidestep regulatory constraints for market entry. Successful social institutions matter for market entry and commercialisation of technology. But if the technological basis is inferior, there is only so much ground they can cover.

Third, American inventors and their financiers in the late 19th century seem underrated or missing entirely in [common accounts](https://www.amazon.com/Power-Law-Venture-Capital-Making/dp/052555999X/r) of the history of risk-capital. Instead, [accounts](https://www.amazon.com/VC-American-History-Tom-Nicholas/dp/0674248260/ref=sr_1_1?crid=3VLMAEYSQDSCY\&keywords=american+history+vc\&qid=1706902250\&sprefix=american+histroy+%2Caps%2C247\&sr=8-1) go from the Whaling industry right to the American military complex, the VC firms around East Coast Families, and Arthur Rock.

However, private financiers like J.P. Morgan made investments into the telephone, the lightbulb, and the electric grid in the late 19th century. Although their investment structure and the investments themselves did not have the structure that is now common for Venture Capital, they are illustrative of the core characteristics of venture: investment in nascent technology that is driven by one entrepreneur with a high risk of failure.

Fourth, the rivalry between technology firms at the time involved more violent means, but were fought at similar fronts to modern corporate rivalries. The story is also a testament to the need to meet competitor’s attacks using adequate countermeasures – like Westinghouse who fought against the electric chair in the Supreme Court and entered alliances with engineers such as the one with Nikola Tesla to win.

Lastly, there are long-distance DC lines and DC microgrids today. Technological determinism is often a local maxima, with each advancement a new moat forms and an old one falls.

Maybe Thomas Edison was not too wrong after all.

<strong>Thanks</strong> to Zi C. (Sam) Huang for extensive collaboration and editing.

### Suggested Readings

1. [Graham Moore, The Last Days of Night](https://www.amazon.com/Last-Days-Night-Novel/dp/0812988922/).

2. [Jill Jonnes, Empires of Light: Edison, Tesla, Westinghouse, and the Race to Electrify the World](https://www.amazon.com/Empires-Light-Edison-Westinghouse-Electrify/dp/0375758844/).

3. [Tim Wu, The Master Switch: The Rise and Fall of Information Empires](https://www.amazon.com/Master-Switch-Rise-Information-Empires/dp/0307390993/).
