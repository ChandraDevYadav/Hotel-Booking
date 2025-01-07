import React, { useState } from 'react';

const CruiseAbout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-800 mt-12">
        Find the best cruise vacation for you
      </h1>
      <h1 className="text-md font-semibold text-gray-900 mt-4">
        How can I find a cheap cruise?
      </h1>
      <p className="text-sm font-medium text-gray-700">
        Cheap cruise deals are fairly easy to find in most cases, and you can begin by considering what kind of features and itinerary you want.
        The more simplistic the experience is, the cheaper it is in general. On Expedia.com, you can filter for specific features and sort your results by price.
        By mixing and matching certain features, unforgettable experiences may be available with discount cruises. For example, booking a cruise with stunning restaurants and
        live performances while opting for an inside cabin without an ocean view window or balcony could be ideal for a traveler who doesn't plan on spending much time in their cabin anyways.
      </p>

      <h1 className="text-md font-semibold text-gray-900 mt-4">
        What is the cheapest month to take a cruise?
      </h1>
      <p className="text-sm font-medium text-gray-700">
        The cheapest month to take a cruise varies based on your destination and the cruise line company that runs the ship. A Caribbean cruise, for example,
        is generally cheapest in the late summer and early fall since it's the local hurricane season.
      </p>

      <h1 className="text-md font-semibold text-gray-900 mt-4">
        Can I cancel my cruise booking?
      </h1>
      <p className="text-sm font-medium text-gray-700">
        Yes, you can cancel, but there may be fees for canceling depending on how far in advance you cancel and what kind of booking you have.
        You can check the specific cruise lines’ cancellation policies in your itinerary on Expedia.com.
      </p>

      {/* Conditionally render additional content */}
      {isExpanded && (
        <>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            Are river cruises worth the money?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            River cruises are quite relaxing, with much more varied scenery than you'd experience on an ocean cruise. These ships often also feature several stops along the river,
            so passengers can enjoy a greater variety of destinations to explore. Viking river cruises are especially adept at providing this unforgettable experience.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            What cruises are best for families?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            The best family cruises in 2025 / 2026 tend to be Disney cruises with plenty of offerings for kids and adults alike, though MSC cruises are known for their iconic Children Cruise Free promotion.
            Disney cruises, specifically, are essentially a Disney theme park on a boat with live shows, rides, and attractions with your kids' favorite characters.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            How much does a cruise ship cost?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            Cruise prices can vary quite a bit, with cheap cruises and especially luxurious all-inclusive cruises available. Budget lines can offer cruise tickets as low as $50 per night in some cases,
            while the more high-end experiences can reach up to $1,000 per night and more.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            What are some of the best cruise lines?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            Several different cruise lines have a lot to offer, such as Viking cruises, which are known for traversing oceans and rivers with a style that blends outdoor and indoor splendor. Celebrity cruise line is more upscale with luxurious features like WiFi, included beverages, champagne, and suites with panoramic views. Other top cruise lines include Royal Caribbean International, Carnival Cruise, Disney Cruise, and Norwegian Cruise.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            How far in advance do you need to book a cruise?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            It's generally best to book a cruise about 6 to 12 months before your cruise departure. That's the safest way to balance availability and affordability. Technically, you can book earlier or later than that, with some last-minute cruise deals occasionally available up to a weekbefore cruise departure.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            Are cruise trips affordable?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            They can be, and it's especially simple to search for more affordable cruises with Expedia.com. Not only can you filter by cruise length, cruise line, and cabin experience, but you may also sort your results by price to put the more affordable options first on your search results page.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            What is it like to go on a cruise?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            A cruise is generally designed to offer the most relaxing experience possible. Despite the size of the ship, it's possible to feel the wave. Many passengers report that the movements help them sleep. Additionally, many fun cruises offer live stage performances, several restaurants, and shopping opportunities. When the ship is in international waters, you may even be able to enjoy a bit of tax-free shopping.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">
            Are cruises a good way to travel?
          </h1>
          <p className="text-sm font-medium text-gray-700">
            Cruise travel is great if you're looking for some varied fun. Compared to a plane or a train, cruises have their own attractions and can be considered an integral part of cruise vacations. Plus, a cruise can hit several different destinations as well, with plenty of time to enjoy the cruise and scenic locales. It's certainly worth it for a unique experience no other method of travel can match.
          </p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Which cruise line is the cheapest?</h1>
          <p className="text-sm font-medium text-gray-700">The actual cheapest cruise available depends on a variety of different factors. Still, Carnival Cruise tends to be very affordable overall,
            most of the time with great options like the Carnival Sunrise and Carnival Horizon. Royal Caribbean is also another fantastic cruise line
            offering great deals if you are watching your budget.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">How can I get the best cruise deals in 2025 / 2026?</h1>
          <p className="text-sm font-medium text-gray-700">If you're looking for some of the best cruise deals, booking through Expedia.com makes it easy since you can sort your cruise search results
            by price and have access to special deals. One Key members can earn OneKeyCash on all eligible bookings and get instant discounts with Member
            Prices. Sign up today!</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What do I need to know when I book a cruise?</h1>
          <p className="text-sm font-medium text-gray-700">To book a cruise, you'll need to know where you'll be setting off from and where you'll be going, in addition to how many people will be
            with you and the features of the specific cruise you book. Keep in mind that you'll want to factor in spending money in your budget for
            the cruise's restaurants and shops in most cases.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Where should I go on a cruise in 2025 / 2026?</h1>
          <p className="text-sm font-medium text-gray-700">Plenty of incredible cruise destinations are accessible such as cruises to the Bahamas and cruises to Mexico. You may also be interested
            in cruises to Alaska or cruises to Europe for something outside of the Caribbean.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What countries are best to visit by cruise ship?</h1>
          <p className="text-sm font-medium text-gray-700">A lot of countries are accessible via a cruise, but the best include a cruise to Australia. However, a cruise to Australia is quite a long trip
            at sea and really allows you to take in everything the cruise ship has to offer.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Can I get last-minute cruise deals?</h1>
          <p className="text-sm font-medium text-gray-700">Yes, last-minute cruise deals are often available, and you can find them on Expedia.com by inputting your travel dates in your search and
            sorting your results by price. The deals will automatically be applied to the price estimates so that the cheapest estimates will show up
            first on your search results page.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Are cruises all-inclusive?</h1>
          <p className="text-sm font-medium text-gray-700">Cruises aren't always all-inclusive, but they can be. If you're interested in all-inclusive cruises, you can activate a search filter for it
            to ensure your search results only show cruises that meet your all-inclusive standard.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Is food free on a cruise?</h1>
          <p className="text-sm font-medium text-gray-700">Food is sometimes free on a cruise, but there are often specialty restaurants that aren't included with the general booking that you'll have
            to pay for separately. Check the details of each cruise before you book in the "What's included" section after clicking the cruise on your
            search results page.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What cruise lines are adults only?</h1>
          <p className="text-sm font-medium text-gray-700">Several lines offer adults-only cruise experiences, including Viking cruises, Carnival cruises, and Princess cruises. With an adults-only cruise,
            you can relax in a tranquil and laid-back setting without kids running around and enjoy all the cocktails you want.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What cruise lines are considered to be the most luxurious?</h1>
          <p className="text-sm font-medium text-gray-700">Viking cruises are considered exceptionally luxurious, with smaller ships and larger cabins that make them feel more exclusive, but Celebrity
            cruises offer luxury cruise lines too. Booking a luxury cruise means you can expect high-end amenities including gourmet restaurants, sizable
            suites, top-tier performances, massive pools, and much more.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What are the best cruises for couples?</h1>
          <p className="text-sm font-medium text-gray-700">Viking Cruises have much to offer for a more romantic experience. Holland America Line cruises can be quite refined and romantic as well, with
            an adult-oriented experience that's sophisticated rather than rowdy. Romantic cruises offer exceptional service as well as cozy suites for you
            and your partner to enjoy that's complemented by delicious food often themed around the cruise destination.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Why should I go on a cruise for my honeymoon?</h1>
          <p className="text-sm font-medium text-gray-700">Going on a cruise is a great way for you and your new spouse to be pampered with luxury while also being able to explore a new destination.
            Whether you're taking a cruise to Hawaii or a cruise to Bermuda, a particularly romantic experience is almost guaranteed thanks to the sheer
            number of things to do.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Are there any Christmas cruises?</h1>
          <p className="text-sm font-medium text-gray-700">Yes, quite a few cruise lines operate around Christmas, and you can find them easily by entering travel dates around Christmas into your 2025
            cruise search. Some of the most popular Christmas cruises are available with Carnival and Disney.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Do I need a passport to go on a cruise?</h1>
          <p className="text-sm font-medium text-gray-700">Whether or not you need a passport depends on where you're going and the kind of cruise it is. Any US territory like Bermuda and Puerto Rico
            won't require a passport, of course, but you also don't need one if you're on a closed-loop cruise. This is a cruise that begins and ends at
            a US cruise terminal, even if there are stops in other countries on the way.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">Why should I book a cruise with Expedia.com?</h1>
          <p className="text-sm font-medium text-gray-700">Booking a cruise with Expedia.com makes it easy to find a cruise type that works best for you. You can use the cruise finder and sort by
            cruise line, type, destination, length, and itinerary. One Key members also earn OneKeyCash on all eligible bookings that can be used to
            save on future eligible trips.</p>
          <h1 className="text-md font-semibold text-gray-900 mt-4">What happens if a cruise is canceled?</h1>
          <p className="text-sm font-medium text-gray-700">Every cruise has a different cancellation policy, but generally, passengers are entitled to either a full refund or a credit for a future
            cruise at a later date. Remember that they may automatically change your booking to their rescheduled date, so you may have to contact them
            if that date doesn't work for your schedule.</p>
            <p className="text-xs font-medium text-gray-700 mt-9">*OneKeyCash is not redeemable for cash and can only be used on Expedia, Hotels.com and Vrbo.</p>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="my-4 text-blue-600 text-sm hover:border-b-2 hover:border-b-blue-600 font-medium transition"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default CruiseAbout;
