import React, { useState } from 'react';

const GameCardDeliveryReviews = () => {
  // Sample reviews data based on common patterns
  const allReviews = [
    {
      id: 1,
      author: 'Gamer123',
      rating: 5,
      comment: 'Fast delivery, code worked perfectly! I will definitely use this service again.',
      date: '2025-09-15',
      country: 'United States',
      verified: true
    },
    {
      id: 2,
      author: 'InternationalCustomer',
      rating: 5,
      comment: 'As someone from the Caribbean, this service is a lifesaver for getting US PSN cards. Delivery was quick and reliable.',
      date: '2025-09-10',
      country: 'Jamaica',
      verified: true
    },
    {
      id: 3,
      author: 'SkepticalShopper',
      rating: 2,
      comment: 'Had to go through a lengthy verification process which felt invasive for a small purchase. Card worked eventually though.',
      date: '2025-09-05',
      country: 'Canada',
      verified: true
    },
    {
      id: 4,
      author: 'PS4Player',
      rating: 5,
      comment: 'Been using this service for 2 years, never had any issues. Codes always arrive within minutes.',
      date: '2025-08-28',
      country: 'United Kingdom',
      verified: true
    },
    {
      id: 5,
      author: 'FirstTimeBuyer',
      rating: 1,
      comment: 'Order was cancelled without explanation after verification. Frustrating experience.',
      date: '2025-08-20',
      country: 'Australia',
      verified: false
    },
    {
      id: 6,
      author: 'RegularCustomer',
      rating: 4,
      comment: 'Mostly great service, but had one issue where a code was already redeemed. Support resolved it after providing proof.',
      date: '2025-08-15',
      country: 'Germany',
      verified: true
    }
  ];

  // Calculate rating statistics
  const totalReviews = allReviews.length;
  const averageRating = (allReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1);
  
  const ratingDistribution = {
    5: allReviews.filter(review => review.rating === 5).length,
    4: allReviews.filter(review => review.rating === 4).length,
    3: allReviews.filter(review => review.rating === 3).length,
    2: allReviews.filter(review => review.rating === 2).length,
    1: allReviews.filter(review => review.rating === 1).length
  };

  // State for filters
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortOption, setSortOption] = useState('newest');

  // Filter and sort reviews
  const filteredReviews = allReviews
    .filter(review => ratingFilter === 0 || review.rating === ratingFilter)
    .sort((a, b) => {
      if (sortOption === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortOption === 'highest') return b.rating - a.rating;
      if (sortOption === 'lowest') return a.rating - b.rating;
      return 0;
    });

  // Inline CSS styles
  const containerStyle = {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    color: '#333',
    backgroundColor: '#f8f9fa',
    lineHeight: '1.6'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '30px 20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    color: '#7f8c8d',
    fontSize: '1.2rem',
    marginBottom: '20px'
  };

  const statsSectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '30px'
  };

  const statBoxStyle = {
    textAlign: 'center',
    padding: '15px',
    flex: '1 1 200px',
    margin: '10px'
  };

  const ratingBoxStyle = {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const ratingBarContainerStyle = {
    backgroundColor: '#ecf0f1',
    borderRadius: '4px',
    height: '8px',
    margin: '5px 0',
    overflow: 'hidden'
  };

  const ratingBarStyle = (count) => ({
    backgroundColor: '#27ae60',
    height: '100%',
    width: `${(count / totalReviews) * 100}%`
  });

  const filtersStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const ratingFilterStyle = {
    display: 'flex',
    gap: '10px'
  };

  const ratingButtonStyle = (active) => ({
    padding: '8px 15px',
    border: '1px solid #3498db',
    backgroundColor: active ? '#3498db' : 'white',
    color: active ? 'white' : '#3498db',
    borderRadius: '4px',
    cursor: 'pointer'
  });

  const sortSelectStyle = {
    padding: '8px 15px',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    backgroundColor: 'white'
  };

  const reviewGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  };

  const reviewCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  const reviewHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px'
  };

  const authorStyle = {
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '5px'
  };

  const countryStyle = {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  };

  const ratingStyle = {
    color: '#f39c12',
    fontSize: '1.1rem'
  };

  const commentStyle = {
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: '15px'
  };

  const dateStyle = {
    color: '#95a5a6',
    fontSize: '0.8rem',
    textAlign: 'right'
  };

  const verifiedBadgeStyle = {
    display: 'inline-block',
    backgroundColor: '#27ae60',
    color: 'white',
    fontSize: '0.7rem',
    padding: '2px 8px',
    borderRadius: '10px',
    marginLeft: '10px'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>GameCardDelivery Customer Reviews</h1>
        <p style={subtitleStyle}>See what our customers are saying about our service</p>
        
        <div style={statsSectionStyle}>
          <div style={statBoxStyle}>
            <div style={ratingBoxStyle}>{averageRating} out of 5</div>
            <div>Average Rating</div>
          </div>
          <div style={statBoxStyle}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50'}}>
              {totalReviews}
            </div>
            <div>Total Reviews</div>
          </div>
          <div style={statBoxStyle}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50'}}>
              {Math.round((ratingDistribution[5] / totalReviews) * 100)}%
            </div>
            <div>Would Recommend</div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div style={{marginTop: '30px', maxWidth: '500px', margin: '30px auto'}}>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
              <span style={{width: '30px'}}>{rating} ★</span>
              <div style={{...ratingBarContainerStyle, flex: 1}}>
                <div style={ratingBarStyle(ratingDistribution[rating])}></div>
              </div>
              <span style={{width: '40px', textAlign: 'right'}}>{ratingDistribution[rating]}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Filters Section */}
      <div style={filtersStyle}>
        <div style={ratingFilterStyle}>
          <span style={{marginRight: '10px', lineHeight: '35px'}}>Filter by rating:</span>
          {[0, 5, 4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              style={ratingButtonStyle(ratingFilter === rating)}
              onClick={() => setRatingFilter(rating)}
            >
              {rating === 0 ? 'All' : `${rating} ★`}
            </button>
          ))}
        </div>
        
        <div>
          <span style={{marginRight: '10px'}}>Sort by:</span>
          <select 
            style={sortSelectStyle}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div style={reviewGridStyle}>
        {filteredReviews.map(review => (
          <div key={review.id} style={reviewCardStyle}>
            <div style={reviewHeaderStyle}>
              <div>
                <div style={authorStyle}>
                  {review.author}
                  {review.verified && <span style={verifiedBadgeStyle}>Verified</span>}
                </div>
                <div style={countryStyle}>{review.country}</div>
              </div>
              <div style={ratingStyle}>
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <div style={commentStyle}>{review.comment}</div>
            <div style={dateStyle}>{review.date}</div>
          </div>
        ))}
      </div>

      {/* Write Review CTA */}
      <div style={{textAlign: 'center', padding: '30px'}}>
        <h3>Bought from GameCardDelivery?</h3>
        <p>Share your experience with other customers</p>
        <button style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold'
        }}>
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default GameCardDeliveryReviews;