import React, { useState } from "react";
import CompanyCard from "../components/CompanyCard";
import frenb from "../assets/banner25.webp";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";
import ButtonGrad from "../components/ButtonGrad";
import "./Blogs.css";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate;
  const [recentBlog, setRecentBlog] = useState({
    title: "Unlocking Success: The Power of Franchising in Today' Market",
    desc: "In the fast-paced world of entrepreneurship, one business model stands out for its ability toturn startups into success stories: franchising.",
    descm: `In the fast-paced world of entrepreneurship, one business model stands out for its ability to turn startups into success stories: franchising. This approach offers aspiring business owners the chance to run their own venture while tapping into the support and recognition of an established brand. Let's dive into why franchising has become so popular and how it benefits both franchisees and parent companies.`,
    head1: "Reduced Risk:",
    top1: "Franchising provides a proven roadmap for success, significantly reducing the inherent risks associated with starting a new business. According to the International Franchise Association (IFA), franchises boast a significantly higher success rate compared to independent startups. For instance, a study conducted by the IFA revealed that over 90 percent of franchise businesses were still operating after five years, compared to just 15 percent of independent startups. This statistic underscores the stability and resilience inherent in the franchise model, making it an attractive option for risk-averse entrepreneurs.",
    head2: "Brand Recognition:",
    top2: "The power of established brand recognition cannot be overstated in today's saturated marketplaces. Franchisees benefit from the instant credibility and trust associated with well-known brands, providing them with a competitive edge from the outset. Take the case of Subway, the world's largest submarine sandwich chain. With over 41,000 locations globally Subway's brand ubiquity has enabled franchisees to tap into a loyal customer base, driving revenue and profitability. This underscores the inherent advantage of aligning with a recognized brand in the franchising realm.",
    head3: "Support and Training:",
    top3: `Franchisors invest heavily in training and support systems to empower franchisees for
    success. This comprehensive support structure includes initial training programs, ongoing
    operational assistance, and marketing support to help franchisees navigate the complexities
    of running a business. For example, McDonald's renowned Hamburger University has trained
    thousands of franchisees and employees worldwide, equipping them with the skills and
    knowledge needed to excel in the fast-food industry. Such initiatives underscore the
    commitment of franchisors to the success of their franchisees, fostering a symbiotic
    relationship built on mutual growth and prosperity.`,
    head4: "Economies of Scale:",
    top4: `Franchises leverage economies of scale to drive operational efficiency and cost savings,
    benefiting franchisees and parent companies alike. Through centralized purchasing and
    marketing initiatives, franchise networks can negotiate favorable terms with suppliers and
    vendors, resulting in reduced costs for franchisees. Domino's Pizza, for instance, leverages its
    global network of franchisees to procure ingredients at scale, allowing franchise owners to
    enjoy competitive pricing while maintaining quality standards. This collaborative approach to
    procurement exemplifies the synergies inherent in the franchise model, driving value for all
    stakeholders involved.`,
    head5: "Diversification:",
    top5: `Franchising enables businesses to diversify their revenue streams and expand into new
    markets with minimal risk. By partnering with local entrepreneurs who possess intimate
    knowledge of their respective markets, parent companies can penetrate new territories while
    tapping into the entrepreneurial drive of franchisees. A prime example is Marriott
    International, which operates over 7,600 properties worldwide through its franchise model.
    By leveraging the expertise of local franchisees, Marriott has expanded its global footprint
    while offering travelers a diverse portfolio of hotel brands to choose from.`,
    head6: "Conclusion",
    top6: `In essence, franchising represents a transformative force in the world of entrepreneurship,
    offering a proven pathway to success for startups and established businesses alike. By
    leveraging the benefits of reduced risk, brand recognition, comprehensive support,
    economies of scale, and diversification, franchisees and parent companies can chart a course
    towards sustainable growth and profitability in today's dynamic business landscape`,
    date: "20 Feb 2024",
    by: "Admin1",
    img: frenb,
  });

  const compData = [
    {
      title: "Unlocking Success: The Power of Franchising in Today' Market",
      desc: "In the fast-paced world of entrepreneurship, one business model stands out for its ability toturn startups into success stories: franchising.",
      descm: `In the fast-paced world of entrepreneurship, one business model stands out for its ability to turn startups into success stories: franchising. This approach offers aspirin business owners the chance to run their own venture while tapping into the support and recognition of an established brand. Let's dive into why franchising has become so popular and how it benefits both franchisees and parent companies.`,
      head1: "Reduced Risk:",
      top1: "Franchising provides a proven roadmap for success, significantly reducing the inherent risks associated with starting a new business. According to the International Franchise Association (IFA), franchises boast a significantly higher success rate compared to independent startups. For instance, a study conducted by the IFA revealed that over 90 percent of franchise businesses were still operating after five years, compared to just 15 percent of independent startups. This statistic underscores the stability and resilience inherent in the franchise model, making it an attractive option for risk-averse entrepreneurs.",
      head2: "Brand Recognition:",
      top2: "The power of established brand recognition cannot be overstated in today's saturated marketplaces. Franchisees benefit from the instant credibility and trust associated with well-known brands, providing them with a competitive edge from the outset. Take the case of Subway, the world's largest submarine sandwich chain. With over 41,000 locations globally Subway's brand ubiquity has enabled franchisees to tap into a loyal customer base, driving revenue and profitability. This underscores the inherent advantage of aligning with a recognized brand in the franchising realm.",
      head3: "Support and Training:",
      top3: `Franchisors invest heavily in training and support systems to empower franchisees for
      success. This comprehensive support structure includes initial training programs, ongoing
      operational assistance, and marketing support to help franchisees navigate the complexities
      of running a business. For example, McDonald's renowned Hamburger University has trained
      thousands of franchisees and employees worldwide, equipping them with the skills and
      knowledge needed to excel in the fast-food industry. Such initiatives underscore the
      commitment of franchisors to the success of their franchisees, fostering a symbiotic
      relationship built on mutual growth and prosperity.`,
      head4: "Economies of Scale:",
      top4: `Franchises leverage economies of scale to drive operational efficiency and cost savings,
      benefiting franchisees and parent companies alike. Through centralized purchasing and
      marketing initiatives, franchise networks can negotiate favorable terms with suppliers and
      vendors, resulting in reduced costs for franchisees. Domino's Pizza, for instance, leverages its
      global network of franchisees to procure ingredients at scale, allowing franchise owners to
      enjoy competitive pricing while maintaining quality standards. This collaborative approach to
      procurement exemplifies the synergies inherent in the franchise model, driving value for all
      stakeholders involved.`,
      head5: "Diversification:",
      top5: `Franchising enables businesses to diversify their revenue streams and expand into new
      markets with minimal risk. By partnering with local entrepreneurs who possess intimate
      knowledge of their respective markets, parent companies can penetrate new territories while
      tapping into the entrepreneurial drive of franchisees. A prime example is Marriott
      International, which operates over 7,600 properties worldwide through its franchise model.
      By leveraging the expertise of local franchisees, Marriott has expanded its global footprint
      while offering travelers a diverse portfolio of hotel brands to choose from.`,
      head6: "Conclusion",
      top6: `In essence, franchising represents a transformative force in the world of entrepreneurship,
      offering a proven pathway to success for startups and established businesses alike. By
      leveraging the benefits of reduced risk, brand recognition, comprehensive support,
      economies of scale, and diversification, franchisees and parent companies can chart a course
      towards sustainable growth and profitability in today's dynamic business landscape`,
      date: "20 Feb 2024",
      by: "Admin1",
      img: blog1,
    },
    {
      title:
        "From Ambition to Action: Why Investing in Franchise Opportunities is Key",
      desc: "In today's dynamic business landscape, entrepreneurs are constantly seeking avenues to turn their ambitious visions into tangible success stories.",
      descm: `In today's dynamic business landscape, entrepreneurs are constantly seeking avenues to turn
      their ambitious visions into tangible success stories. One avenue that has gained significant
      traction in recent years is investing in franchise opportunities. With a proven business model
      and a support system in place, franchising offers a compelling path for ambitious individuals
      to translate their aspirations into actionable results.`,
      head1: "The Power of Partnership",
      top1: `At “Invest In Franchise”, we understand the power of partnership. As a franchisee, you
      become part of a well-established brand with a track record of success. This partnership
      provides you with instant recognition and credibility in the market, giving you a competitive
      edge from day one.`,
      head2: "Leveraging a Proven Business Model",
      top2: `One of the key advantages of investing in a franchise is the access to a proven business
      model. Unlike starting a business from scratch, where trial and error are inevitable,
      franchising provides you with a blueprint for success. From operational processes to
      marketing strategies, you benefit from the experience and expertise of the franchisor,
      significantly reducing the risk associated with entrepreneurship.`,
      head3: "Mitigating Risk, Maximizing Returns",
      top3: `Entrepreneurship inherently involves risk, but investing in a franchise allows you to mitigate
      many of these risks. With a well-defined business model, comprehensive training programs,
      and ongoing support, you have the tools and resources needed to navigate challenges
      effectively. This not only increases your chances of success but also accelerates your path to
      profitability, maximizing returns on your investment.`,
      head4: "Tap into a Thriving Market",
      top4: `Franchising offers a gateway to tap into thriving markets that may have been otherwise
      inaccessible. Whether it's expanding into new geographic regions or targeting specific
      demographics, the scalability of the franchise model empowers you to capitalize on emerging
      opportunities and diversify your revenue streams.`,
      head5: "Conclusion",
      top5: `In conclusion, investing in franchise opportunities presents a compelling proposition for
      ambitious individuals looking to translate their aspirations into actionable results. From the
      power of partnership to leveraging a proven business model, franchising offers a pathway to
      success that combines innovation with reliability. At “Invest In Franchise”, we are committed
      to empowering entrepreneurs on their journey from ambition to action. Join us and unlock
      the endless possibilities that franchising has to offer`,

      date: "15 Feb 2024",
      by: "Admin2",
      img: blog2,
    },
    {
      title: "Don't Rush: A Step-by-Step Guide to Choosing the Right Franchise",
      desc: "Embarking on the journey to buy a franchise is an exciting yet complex endeavor. ",
      descm: `While the allure of becoming your own boss is strong, diving headfirst into franchise ownership can be risky. This guide unveils a strategic approach to selecting the perfect franchise opportunity, ensuring a profitable and fulfilling entrepreneurial journey.
      By following these essential steps, you'll gain the knowledge and confidence to navigate the franchise selection process effectively, setting yourself up for long-term success.`,
      head1: "Assess Your Rule-Following Aptitude",
      top1: `Before diving into the world of franchising, it's essential to honestly evaluate whether you're inclined to adhere to established rules and guidelines. Franchise businesses thrive on structure, making it imperative for potential franchisees to embrace and follow the prescribed operational protocols.`,
      head2: "Set a Realistic Budget",
      top2: `Time is a precious resource, and wasting it on exploring franchise opportunities beyond your financial reach can be disheartening. Set a clear budget upfront to ensure you focus your efforts on franchises that align with your investment capabilities, minimizing the risk of disappointment down the line.`,
      head3: " Identify Your Strengths and Traits",
      top3: `Creating a list of your top skills and personal characteristics lays the foundation for finding a franchise that resonates with your strengths and values. By leveraging your unique attributes, you can align yourself with franchise opportunities that offer the best fit for your entrepreneurial journey.`,
      head4: "Conduct Thorough Research",
      top4: `Armed with your budget and personal insights, it's time to embark on a comprehensive search for franchise opportunities. Utilize online resources and franchise portals to explore options that match your investment criteria and skill set, narrowing down your choices to a select few promising prospects.`,
      head5: "Request Information and Initiate Research",
      top5: `Taking the initiative to request more information from franchisors marks a pivotal step in your journey toward franchise ownership. Engage in diligent research, leveraging conversations with franchise development representatives and existing franchisees to gain invaluable insights into the opportunities under consideration.`,
      head6: "Attend Discovery Day and Headquarters Visit",
      top6: `Participating in Discovery Day events and visiting franchise headquarters provides invaluable firsthand experience and interaction with the franchisor's team. These immersive opportunities allow you to assess the culture, operations, and support structure of potential franchises, aiding in your decision-making process.`,
      head7: "Seek Legal Counsel",
      top7: `Navigating the legal intricacies of franchise agreements requires specialized expertise. Enlist the services of a competent franchise attorney to guide you through the contract review process and ensure a thorough understanding of your rights and obligations as a franchisee.`,
      head8: "Explore Financing Options",
      top8: `Determining how to finance your franchise investment is a critical consideration. Research various financing options, from small business loans to crowdfunding, and develop a solid business plan to present to lenders, demonstrating your preparedness and commitment to success.`,
      head9: "Conclusion: Make a Confident Decision",
      top9: `Armed with comprehensive research, legal guidance, and financial clarity, it's time to make the pivotal decision to pursue or decline the franchise opportunity. Trust your instincts, weigh the pros and cons, and proceed with confidence toward your entrepreneurial aspirations.`,
      date: "12 Feb 2024",
      by: "Admin3",
      img: blog3,
    },
    {
      title: "Franchise vs Corporate: Understanding the Distinctions",
      desc: "In the world of business, the decision to invest in a franchise or opt for a corporate venture can have profound implications on one's entrepreneurial journey. ",
      descm: `In the world of business, the decision to invest in a franchise or opt for a corporate venture can have profound implications on one's entrepreneurial journey. Both avenues offer unique advantages and challenges, making it crucial for prospective business owners to grasp the fundamental differences between the two models before making a decision. In this comprehensive guide, we'll explore the distinctions between franchises and corporate ventures, empowering you to make an informed choice that aligns with your goals and aspirations.`,
      title1: "Franchise vs Corporate: A Comparative Analysis",
      head1: "1. Ownership Structure",
      top1: `Franchise: Franchise ownership involves partnering with an established brand or company and operating under their trademark and business model. Franchisees maintain a level of autonomy while adhering to the guidelines and standards set by the franchisor.
      Corporate: Corporate ventures are wholly-owned and operated by the parent company or organization. Owners have full control over business operations and decision-making processes, with no obligation to adhere to external franchisor guidelines.`,
      head2: "2. Business Model",
      top2: `Franchise: Franchises operate based on a proven business model developed by the franchisor. This model includes standardized processes, marketing strategies, and operational protocols aimed at replicating success across multiple locations.
      Corporate: Corporate ventures have the flexibility to develop their own unique business model tailored to their specific goals and objectives. Owners have the freedom to innovate and adapt strategies to suit changing market dynamics.`,
      head3: "3. Support and Resources",
      top3: `Franchise: Franchisees benefit from ongoing support and resources provided by the franchisor, including training, marketing assistance, and operational guidance. This support network enhances the chances of success and minimizes the risks associated with business ownership.
      Corporate: Corporate ventures rely on internal resources and expertise to drive business growth and development. While owners have access to in-house support services, such as HR and finance, they bear full responsibility for managing and sustaining their operations.`,
      head4: "4. Risk and Reward",
      top4: `Franchise: Franchise ownership offers a balance of risk and reward, with the potential for profitability tempered by the initial investment and ongoing royalty fees paid to the franchisor. Success is contingent on factors such as market demand, location, and adherence to brand standards.
      Corporate: Corporate ventures entail a higher degree of risk and reward, as owners assume full responsibility for all aspects of the business. While the potential for financial gain may be greater, owners also bear the brunt of losses and liabilities associated with corporate ownership.`,
      head5: "1. Franchisee Success Stories: Insights from the Trenches",
      top5: `Dive into real-life accounts of franchisees who have navigated the challenges and triumphs of franchise ownership, offering valuable lessons and insights for aspiring entrepreneurs.`,
      head6: "2. Corporate Innovation: Navigating the Path to Success",
      top6: `Explore strategies and best practices for fostering innovation and driving growth within corporate ventures, from product development to market expansion initiatives.`,
      head7: "3. Franchise Resale Market: Opportunities and Considerations",
      top7: `Delve into the burgeoning franchise resale market, uncovering the potential benefits and pitfalls of buying and selling existing franchise businesses.`,
      head8:
        "4. Corporate Social Responsibility: Making an Impact Beyond Profits",
      top8: `Learn how corporate ventures can leverage their resources and influence to effect positive change in society, from sustainability initiatives to community engagement programs.`,
      head9: "Conclusion",
      top9: `By gaining a deeper understanding of the nuances between franchises and corporate ventures, aspiring business owners can chart a course towards success that aligns with their unique vision and aspirations. Whether you choose to embark on the franchise path or pursue a corporate venture, thorough research, careful planning, and unwavering determination are key to achieving your entrepreneurial dreams.`,
      date: "02 Feb 2024",
      by: "Admin4",
      img: blog4,
    },
    {
      title:
        "What is Franchising? Learn the Basics of This Popular Business Method",
      desc: "A contractual relationship between the franchisor and the franchisee in which the franchisor offers or is obliged to maintain a continuing interest in the business of the franchisee in such areas as know-how and training",
      descm: `You want to run a business and have heard about franchising—and you're intrigued, but you aren't sure if a franchise opportunity is the right choice for you. You're in the right place. This page will give you an overview of what franchising is, giving you a better foundation of knowledge as you begin your journey towards (potentially) being a franchisee.
      A contractual relationship between the franchisor and the franchisee in which the franchisor offers or is obliged to maintain a continuing interest in the business of the franchisee in such areas as know-how and training; wherein the franchisee operates under a common trade name, format or procedure owned by or controlled by the franchisor, and in which the franchisee has made or will make a substantial capital investment in his business from his own resources.`,

      head1: "The Origin of Franchising",
      top1: `Commonly when people think about the beginnings of franchising, the company that comes to mind is McDonald's, but franchising has older roots than the fast food giant. 

      The modern-day concept of franchising is widely believed to have originated in the 1850s with Isaac Singer. Singer was seeking a way to distribute his sewing machines outside of his immediate area, but he also wanted to instruct customers how to properly use them.

      Since he couldn't be in more than one place at once, he began selling licenses to selected entrepreneurs in different parts of the country. This business tactic proved to be the predecessor of the current franchise agreement. `,
      head2: "Business Model",
      top2: `According to the International Franchise Association (IFA), franchising is defined as:
      A contractual relationship between the franchisor and the franchisee in which the franchisor offers or is obliged to maintain a continuing interest in the business of the franchisee in such areas as know-how and training; wherein the franchisee operates under a common trade name, format or procedure owned by or controlled by the franchisor, and in which the franchisee has made or will make a substantial capital investment in his business from his own resources.
      Simply, a franchise is the right or license granted by a company (the franchisor) to an individual or group (the franchisee) to market its products or services in a specific territory or area.
      `,
      head3: " How Does a Franchise Work?",
      top3: `In a franchise business setup, franchisees gain access to a franchisor's business system, know-how and experience in exchange for their monetary investment and personal labor. This way, the franchisees can shorten the learning curve that comes with starting a business. It's a way for franchisees to avoid a significant portion of the time and money spent that typically comes along with developing a business idea.

      On the other side of the deal, by licensing out its business system and pledging support to franchisees, the franchisor allows itself the opportunity to expand into areas it may have had difficulty expanding to without the additional money and manpower.`,
      head4: "Franchise Business Models",
      top4: `The two most common forms of franchising are product distribution and business format.

      In product distribution franchises, franchisees sell or distribute the franchisor's products through a supplier-dealer relationship. The franchisor licenses its trademark and logo to the franchisees but typically does not provide them with an entire system for running their business. Dealers are a typical form of product distribution franchises. The industries where you most often find this type of franchising are: automobile services, soft drink distribution, equipment dealers, and gas stations.

      In business format franchises, the franchisor licenses their brand to a franchisee for use with a predetermined way of conducting business. Franchisees, after they have signed the franchise agreement, are given access to not only a franchisor's product and/or service, but also their trademark(s), and their complete method for conducting the business itself. This method includes items such as training, computer systems, marketing plans, operations manuals, and more. Most franchises available are business format opportunities.`,
      head5: "A Very Common Business Format",
      top5: `Despite its popular association with food, business format franchising is extremely diverse and not confined to a narrow range of business segments. Name an industry and there's likely a franchise in it. There are over 3,000 franchise concepts operating in the United States.

      Also, while it's true that the most popular franchise businesses such as McDonald's and Subway have outgrown their humble beginnings and are now huge entities—operating thousands of units in numerous countries, the vast majority of franchise businesses are truly small businesses. Most franchise systems have fewer than 100 units total. `,

      date: "30 Jan 2024",
      by: "Admin5",
      img: blog5,
    },
    {
      title: "Exploring Franchise Opportunities: From New Ventures to Resale",
      desc: "The allure of entrepreneurship beckons many individuals to explore the world of franchising—a realm brimming with diverse opportunities for aspiring business owners. ",
      descm: `The allure of entrepreneurship beckons many individuals to explore the world of franchising—a realm brimming with diverse opportunities for aspiring business owners. Whether you're a seasoned entrepreneur seeking a new venture or an investor looking to capitalize on an existing business, the world of franchising offers a plethora of options to suit your goals and aspirations.

      In this comprehensive guide, we'll delve into the dynamic landscape of franchises for sale and franchise resale, unraveling the intricacies of each avenue and empowering you to navigate the path to franchise ownership with confidence and clarity.

`,
      title1: "Franchises for Sale: Embarking on a New Venture",
      head1: "1. Understanding Franchise Ownership:",
      top1: `Delve into the fundamentals of franchise ownership, including the rights and responsibilities of franchisees, and the benefits of partnering with established brands.`,
      head2: "2. Exploring Franchise Opportunities: ",
      top2: `Explore a diverse array of franchise opportunities across industries such as food and beverage, retail, health and wellness, and more. From fast-food chains to boutique fitness studios, there's a franchise to suit every entrepreneurial vision.`,
      head3: "3. Researching Franchise Options:",
      top3: `Learn how to conduct thorough due diligence when evaluating franchise opportunities, including assessing financial viability, analyzing market demand, and evaluating franchisor support and training programs.`,
      head4: "4. Navigating the Franchise Agreement: ",
      top4: `Gain insights into the key components of a franchise agreement, including franchise fees, royalties, territory rights, and renewal terms. Understand your rights and obligations as a franchisee before signing on the dotted line.`,
      title2:
        "Franchise Resale: Unlocking Opportunities in Established Businesses",
      head5: "1. Understanding Franchise Resale",
      top5: `Explore the concept of franchise resale and its advantages for both buyers and sellers. Discover how buying an existing franchise can offer a faster route to profitability and reduced startup risks.`,
      head6: "2.Exploring Resale Opportunities: ",
      top6: `Delve into the diverse array of franchise resale opportunities available in the market, from thriving fast-food outlets to established retail stores. Learn how to identify lucrative resale opportunities and assess their potential for success.`,
      head7: "3. Conducting Due Diligence:",
      top7: `Discover the importance of conducting comprehensive due diligence when considering a franchise resale opportunity. Evaluate factors such as financial performance, customer base, location, and market demand to make an informed investment decision.`,
      head8: "4. Negotiating the Purchase:",
      top8: `Learn effective negotiation strategies to secure a favorable deal when purchasing a franchise resale. Navigate discussions with sellers to reach mutually beneficial terms that align with your budget and objectives.`,
      head9: "Conclusion",
      top9: `Whether you're drawn to the excitement of starting a new venture or the stability of investing in an established business, franchising offers a wealth of opportunities to fulfill your entrepreneurial dreams. From exploring franchise opportunities to unlocking the potential of franchise resale, the journey to franchise ownership is as diverse as it is rewarding. By arming yourself with knowledge, conducting thorough research, and seeking guidance from experienced professionals, you can embark on a successful journey towards franchise ownership and achieve your goals of business ownership and financial independence.`,
      date: "25 Jan 2024",
      by: "Admin6",
      img: blog6,
    },
  ];

  const updateRecentBlog = (
    title,
    desc,
    date,
    by,
    img,
    descm,
    head1,
    top1,
    head2,
    top2,
    head3,
    top3,
    head4,
    top4,
    head5,
    top5,
    head6,
    top6,
    head7,
    top7,
    head8,
    top8,
    head9,
    top9,
    title1,
    title2
  ) => {
    setRecentBlog({
      title,
      desc,
      date,
      by,
      img,
      descm,
      head1,
      top1,
      head2,
      top2,
      head3,
      top3,
      head4,
      top4,
      head5,
      top5,
      head6,
      top6,
      head7,
      top7,
      head8,
      top8,
      head9,
      top9,
      title1,
      title2,
    });
  };

  return (
    <div className="">
      <div className="container-main">
        <h3 className="text-3xl xl:text-5xl text-gray-900 font-bold mb-12 mt-8 ml-4">
          Recent Blogs
        </h3>
        <div className="relative md:h-[600px] h-[400px] mb-24">
          <div className="absolute  sm:top-[35%] top-[25%] md:w-1/2 w-5/6 md:left-[35%] left-10 ">
            <h3 className="text-white xl:text-3xl text-xl font-semibold ">
              {recentBlog.title}
            </h3>
            <p className="text-white text-base xl:text-lg ">
              {recentBlog.desc}
            </p>

            <div className=" mt-8">
              <ButtonGrad high={40 + "px"} wid={180 + "px"} text="READ MORE" />
            </div>
          </div>
          <img src={frenb} alt="img" className="w-full h-full " />
        </div>
      </div>
      <div className="container-main pb-16">
        <h1 className="text-xl lg:text-3xl xl:text-5xl mb-16 text-center font-semibold">
          Some Potential Franchise <br /> Opportunities
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid:cols-1 gap-y-12 flex justify-center ">
          {compData.map((company, index) => {
            return (
              <CompanyCard
                company={company}
                key={index}
                updateRecentBlog={updateRecentBlog}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
