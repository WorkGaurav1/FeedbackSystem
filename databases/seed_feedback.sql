/* ===========================================================
   LEADERSHIP (Attribute ID = 1)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,1,'Positive',
'Excellent Team Coordination',
'You consistently coordinate the team effectively and ensure everyone understands their responsibilities.'),

(2,1,'Positive',
'Strong Decision Making',
'You remained calm during a difficult situation and made timely decisions.'),

(3,1,'Positive',
'Motivates Others',
'You encourage teammates to perform at their best and maintain a positive work environment.'),

(4,1,'Positive',
'Ownership of Projects',
'You take responsibility for project outcomes and support the team throughout execution.'),

(5,1,'Positive',
'Supportive Leadership',
'You are approachable and always willing to guide junior colleagues.'),

(6,1,'Positive',
'Clear Vision',
'You clearly communicate goals and keep everyone aligned with project objectives.'),

(7,1,'Positive',
'Conflict Resolution',
'You handled disagreements professionally and helped the team reach a solution.'),

(8,1,'Positive',
'Leading by Example',
'You consistently demonstrate professionalism and commitment through your actions.'),

(9,1,'Negative',
'Delegate More Often',
'You sometimes try to complete every important task yourself instead of delegating work.'),

(10,1,'Negative',
'Improve Team Involvement',
'Team members should be involved more frequently while making important decisions.');

/* ===========================================================
   PRODUCTIVITY (Attribute ID = 2)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,2,'Positive','Delivers Work Quickly','You consistently complete assigned work before deadlines.'),

(3,2,'Positive','Highly Efficient','You manage your workload efficiently.'),

(4,2,'Positive','Excellent Output','You consistently maintain a high work output.'),

(5,2,'Positive','Focused Worker','You remain focused throughout the day.'),

(6,2,'Positive','Reliable Performance','Your productivity remains consistent.'),

(7,2,'Positive','Great Time Utilization','You make excellent use of working hours.'),

(8,2,'Negative','Missed Deadline','One task was delayed unnecessarily.'),

(9,2,'Negative','Needs Better Planning','Better planning would improve productivity.');

/* ===========================================================
   WORK QUALITY (Attribute ID = 3)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,3,'Positive','Accurate Work','Your work is consistently accurate.'),
(3,3,'Positive','Attention to Detail','You pay close attention to details.'),
(4,3,'Positive','High Standards','You maintain high quality standards.'),
(5,3,'Positive','Reliable Quality','Your deliverables are reliable.'),

(6,3,'Negative','Minor Errors','Some work contained avoidable mistakes.'),
(7,3,'Negative','Needs Review','Double-check your work before submission.'),
(8,3,'Negative','Quality Issue','Some outputs required rework.'),
(9,3,'Negative','Incomplete Task','One task lacked sufficient detail.');


/* ===========================================================
   TEAMWORK (Attribute ID = 4)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,4,'Positive','Helpful','You willingly help teammates.'),
(3,4,'Positive','Supportive','You support your colleagues.'),
(4,4,'Positive','Cooperative','You cooperate well with others.'),

(5,4,'Negative','Communication Gap','Improve collaboration within the team.'),
(6,4,'Negative','Less Participation','Participate more during discussions.'),
(7,4,'Negative','Team Coordination','Coordinate better with teammates.'),
(8,4,'Negative','Shared Responsibility','Take more ownership in group tasks.'),
(9,4,'Negative','Collaboration','Work more closely with the team.'),
(10,4,'Negative','Support Needed','Offer more support to colleagues.');

/* ===========================================================
   RELIABILITY (Attribute ID = 5)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,5,'Positive','Dependable','You are dependable.'),
(3,5,'Positive','Consistent','You are consistent in your work.'),

(4,5,'Negative','Missed Commitment','One commitment was missed.'),
(5,5,'Negative','Follow-up Needed','More follow-up is required.'),
(6,5,'Negative','Delayed Work','Some work was delayed.'),
(7,5,'Negative','Inconsistent','Performance has been inconsistent.'),
(8,5,'Negative','Availability','Availability could improve.'),
(9,5,'Negative','Ownership','Take greater ownership of tasks.'),
(10,5,'Negative','Responsibility','Responsibilities were not completed on time.'),
(10,5,'Negative','Reliability Concern','Colleagues expect more consistency.');

/* ===========================================================
   COMMUNICATION (Attribute ID = 6)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,6,'Positive','Clear Communication','You explain things clearly.'),
(3,6,'Positive','Active Listener','You listen carefully.'),
(4,6,'Positive','Professional','Communication is professional.'),
(5,6,'Positive','Helpful Discussions','You contribute effectively.'),
(6,6,'Positive','Transparent','You keep everyone informed.'),
(7,6,'Positive','Respectful','Communication is respectful.'),
(8,6,'Positive','Collaborative','You communicate well with the team.'),

(9,6,'Negative','Needs More Updates','Provide updates more frequently.');

/* ===========================================================
   INNOVATION (Attribute ID = 7)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id, feedback_type, feedback_title, feedback_text)
VALUES

(2,7,'Positive','Creative','You suggest creative ideas.'),
(3,7,'Positive','Problem Solver','You solve problems effectively.'),
(4,7,'Positive','Innovative Thinking','Fresh ideas are appreciated.'),
(5,7,'Positive','Continuous Improvement','You seek improvements.'),
(6,7,'Positive','Idea Sharing','You actively share ideas.'),

(7,7,'Negative','Needs More Creativity','Think beyond conventional approaches.'),
(8,7,'Negative','More Initiative','Take more initiative in innovation.'),
(9,7,'Negative','Experiment More','Explore new solutions.');


/* ===========================================================
   ADAPTABILITY (Attribute ID = 8)
   =========================================================== */

INSERT INTO feedback
(receiver_id, attribute_id,feedback_type,feedback_title,feedback_text)
VALUES

(2,8,'Positive','Flexible','You adapt quickly.'),
(3,8,'Positive','Handles Change','You handle change well.'),

(4,8,'Negative','Needs Adjustment','Adjust faster to new situations.'),
(5,8,'Negative','Learning Curve','Learning new tools took longer.');

/* ===========================================================
   ACCOUNTABILITY (Attribute ID = 9)
   =========================================================== */

INSERT INTO feedback
(receiver_id,attribute_id,feedback_type,feedback_title,feedback_text)
VALUES

(2,9,'Positive','Responsible','You take responsibility.'),
(3,9,'Positive','Ownership','You own your work.'),
(4,9,'Positive','Reliable','You accept accountability.'),

(5,9,'Negative','Missed Ownership','Own outcomes more consistently.'),
(6,9,'Negative','Follow Through','Improve follow-through.'),
(7,9,'Negative','Responsibility','Take more responsibility.'),
(8,9,'Negative','Decision Making','Be more accountable for decisions.'),
(9,9,'Negative','Commitment','Honor commitments consistently.'),
(10,9,'Negative','Ownership Needed','Greater ownership is expected.');


/* ===========================================================
   TIME MANAGEMENT (Attribute ID = 10)
   =========================================================== */

INSERT INTO feedback
(receiver_id,attribute_id,feedback_type,feedback_title,feedback_text)
VALUES

(2,10,'Positive','Punctual','You meet deadlines.'),

(3,10,'Negative','Late Submission','One task was submitted late.'),
(4,10,'Negative','Prioritization','Prioritize work better.'),
(5,10,'Negative','Deadline Missed','A deadline was missed.'),
(6,10,'Negative','Planning','Planning can improve.'),
(7,10,'Negative','Time Allocation','Allocate time more effectively.'),
(8,10,'Negative','Schedule','Maintain a better schedule.'),
(9,10,'Negative','Task Delay','Avoid delaying tasks.'),
(10,10,'Negative','Productivity','Improve daily planning.');
