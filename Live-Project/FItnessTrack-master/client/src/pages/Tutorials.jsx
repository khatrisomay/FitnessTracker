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
  padding: 20px 16px;
  font-size: 32px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  padding: 20px 16px;
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 8px;
`;

const ExerciseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  margin-bottom: 16px;
  padding: 12px;
  background: ${({ theme }) => theme.bg_secondary || '#f9f9f9'};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.primary};
`;

const ExerciseName = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  margin-bottom: 8px;
`;

const ExerciseDetails = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 4px 0;
`;

const SectionImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Tutorials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Workout Tutorials</Title>

        <Section>
          <SectionTitle>Chest Workouts</SectionTitle>
          <SectionImage src="https://i.ytimg.com/vi/dYdOkyU9dYQ/maxresdefault.jpg" alt="Bench Press Workout" />
          <ExerciseList>
            <ExerciseItem>
              <ExerciseName>Bench Press</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 45-60 seconds</ExerciseDetails>
              <ExerciseDetails>Lie on a bench, lower the barbell to your chest, then press it up. Focus on controlled movements.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Push-Ups</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 30-45 seconds</ExerciseDetails>
              <ExerciseDetails>Start in a plank position, lower your body until your chest nearly touches the floor, then push back up.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Chest Flyes</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 40-50 seconds</ExerciseDetails>
              <ExerciseDetails>Lie on a bench, hold dumbbells above your chest, lower them out to the sides, then bring back up.</ExerciseDetails>
            </ExerciseItem>
          </ExerciseList>
        </Section>

        <Section>
          <SectionTitle>Shoulder Workouts</SectionTitle>
          <SectionImage src="https://i.ytimg.com/vi/yeTdQscby_g/maxresdefault.jpg" alt="Overhead Press Workout" />
          <ExerciseList>
            <ExerciseItem>
              <ExerciseName>Overhead Press</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 45-60 seconds</ExerciseDetails>
              <ExerciseDetails>Stand with dumbbells at shoulder height, press them overhead until arms are fully extended.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Lateral Raises</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 30-40 seconds</ExerciseDetails>
              <ExerciseDetails>Hold dumbbells at your sides, raise them out to the sides until arms are parallel to the floor.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Front Raises</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 30-40 seconds</ExerciseDetails>
              <ExerciseDetails>Hold dumbbells in front of your thighs, raise them straight up to shoulder height.</ExerciseDetails>
            </ExerciseItem>
          </ExerciseList>
        </Section>

        <Section>
          <SectionTitle>Leg Workouts</SectionTitle>
          <SectionImage src="https://i.ytimg.com/vi/KdX2kh4m5Tk/maxresdefault.jpg" alt="Squats Workout" />
          <ExerciseList>
            <ExerciseItem>
              <ExerciseName>Squats</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 60-90 seconds</ExerciseDetails>
              <ExerciseDetails>Stand with feet shoulder-width apart, lower your body as if sitting back into a chair, then stand up.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Lunges</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4 per leg</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 45-60 seconds</ExerciseDetails>
              <ExerciseDetails>Step forward with one leg, lower until both knees are bent at 90 degrees, then push back up.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Leg Press</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 50-70 seconds</ExerciseDetails>
              <ExerciseDetails>Sit on the machine, place feet on the platform, push the weight away by extending your legs.</ExerciseDetails>
            </ExerciseItem>
          </ExerciseList>
        </Section>

        <Section>
          <SectionTitle>Abs Workouts</SectionTitle>
          <SectionImage src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Planks Workout" />
          <ExerciseList>
            <ExerciseItem>
              <ExerciseName>Planks</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 30-60 seconds</ExerciseDetails>
              <ExerciseDetails>Hold a forearm plank position, keeping your body in a straight line from head to heels.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Crunch</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 30-45 seconds</ExerciseDetails>
              <ExerciseDetails>Lie on your back, knees bent, lift your shoulders off the ground towards your knees.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Russian Twists</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 40-50 seconds</ExerciseDetails>
              <ExerciseDetails>Sit with knees bent, lean back slightly, twist your torso side to side.</ExerciseDetails>
            </ExerciseItem>
          </ExerciseList>
        </Section>

        <Section>
          <SectionTitle>Back Workouts</SectionTitle>
          <SectionImage src="https://i.ytimg.com/vi/ICM6vMjM-fk/maxresdefault.jpg" alt="Pull-Ups Workout" />
          <ExerciseList>
            <ExerciseItem>
              <ExerciseName>Pull-Ups</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 45-60 seconds</ExerciseDetails>
              <ExerciseDetails>Hang from a bar, pull your body up until your chin is over the bar, then lower back down.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Bent-Over Rows</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 50-70 seconds</ExerciseDetails>
              <ExerciseDetails>Bend at the hips, hold a barbell, pull it towards your lower chest, then lower.</ExerciseDetails>
            </ExerciseItem>
            <ExerciseItem>
              <ExerciseName>Deadlifts</ExerciseName>
              <ExerciseDetails><strong>Sets:</strong> 3-4</ExerciseDetails>
              <ExerciseDetails><strong>Duration per Set:</strong> 60-90 seconds</ExerciseDetails>
              <ExerciseDetails>Stand with feet hip-width, bend to grip the bar, lift by extending hips and knees.</ExerciseDetails>
            </ExerciseItem>
          </ExerciseList>
        </Section>

      </Wrapper>
    </Container>
  );
};

export default Tutorials;
