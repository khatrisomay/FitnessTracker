import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
`;

const Content = styled.div`
  padding: 0px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  background: ${({ theme }) => theme.bg_secondary || '#f9f9f9'};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.primary};
`;

const BlogTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  margin-bottom: 8px;
`;

const BlogExcerpt = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 4px 0;
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Blogs</Title>
        <Content>
          <p>Welcome to the Blogs section!</p>
          <p>Read insightful articles about fitness, health, and wellness. Here are some featured topics:</p>
          <ul>
            <li><strong>The Benefits of Regular Exercise:</strong> Discover how consistent physical activity can improve your overall health, boost energy levels, and enhance mental well-being.</li>
            <li><strong>Nutrition Tips for Athletes:</strong> Learn about balanced diets, macronutrients, and hydration strategies to fuel your workouts and recovery.</li>
            <li><strong>Mental Health and Fitness:</strong> Explore the connection between physical fitness and mental health, including stress reduction and mood enhancement.</li>
            <li><strong>Latest Fitness Trends:</strong> Stay updated on emerging workout routines, wearable tech, and innovative training methods.</li>
          </ul>
          <p>Check out our latest blog posts below:</p>
        </Content>

        <BlogPost>
          <BlogTitle>Unlocking the Power of HIIT Workouts</BlogTitle>
          <BlogExcerpt>High-Intensity Interval Training (HIIT) has taken the fitness world by storm. This workout style alternates short bursts of intense exercise with periods of rest or low-intensity activity. Not only does it burn calories efficiently, but it also improves cardiovascular health and boosts metabolism. In this post, we dive into the science behind HIIT, provide sample routines, and share tips for beginners.</BlogExcerpt>
        </BlogPost>

        <BlogPost>
          <BlogTitle>The Role of Protein in Muscle Building</BlogTitle>
          <BlogExcerpt>Protein is the building block of muscles, and understanding its importance can make or break your fitness goals. From sources like lean meats, eggs, and plant-based options to timing your intake, this article covers everything you need to know about incorporating protein into your diet for optimal muscle growth and recovery.</BlogExcerpt>
        </BlogPost>

        <BlogPost>
          <BlogTitle>Mindfulness in Fitness: Beyond the Physical</BlogTitle>
          <BlogExcerpt>Fitness isn't just about the body—it's about the mind too. Practicing mindfulness during workouts can enhance focus, reduce injury risk, and make exercise more enjoyable. Learn simple techniques to incorporate mindfulness into your routine and reap the mental benefits of a holistic approach to health.</BlogExcerpt>
        </BlogPost>

        <Content>
          <p>More blog posts coming soon! Stay tuned for more in-depth articles and expert advice.</p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
