-- ----------------------
-- Seed data cho Parents
-- ----------------------
INSERT INTO parents (name, phone, email) VALUES
('Parent A', '0123456789', 'parenta@example.com'),
('Parent B', '0987654321', 'parentb@example.com');

-- ----------------------
-- Seed data cho Students
-- ----------------------
INSERT INTO students (name, dob, gender, current_grade, parent_id) VALUES
('Student 1', '2010-05-12', 'male', '5', 1),
('Student 2', '2011-03-22', 'female', '4', 1),
('Student 3', '2009-11-15', 'male', '6', 2);

-- ----------------------
-- Seed data cho Classes
-- ----------------------
INSERT INTO classes (name, subject, day_of_week, time_slot, teacher_name, max_students) VALUES
('Math 101', 'Math', 1, '08:00-10:00', 'Mr. John', 20),
('English 102', 'English', 1, '10:00-12:00', 'Ms. Anna', 25),
('Physics 103', 'Physics', 2, '13:00-15:00', 'Mr. Steve', 15);

-- ----------------------
-- Seed data cho Registrations
-- ----------------------
INSERT INTO registrations (student_id, class_id) VALUES
(1, 1),
(2, 2);

-- ----------------------
-- Seed data cho Subscriptions
-- ----------------------
INSERT INTO subscriptions (student_id, package_name, start_date, end_date, total_sessions, used_sessions) VALUES
(1, 'Basic Plan', '2026-03-01', '2026-06-01', 12, 2),
(2, 'Standard Plan', '2026-03-05', '2026-06-05', 15, 0),
(3, 'Premium Plan', '2026-03-10', '2026-06-10', 20, 5);