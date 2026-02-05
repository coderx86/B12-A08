import app1 from '../assets/demo-app (1).webp';
import app2 from '../assets/demo-app (2).webp';
import app3 from '../assets/demo-app (3).webp';
import app4 from '../assets/demo-app (4).webp';
import app5 from '../assets/demo-app (5).webp';
import app6 from '../assets/demo-app (6).webp';

const apps = [
    {
        image: app1,
        title: "Forest: Focus For Productivity",
        companyName: "Seekrtech",
        id: 1,
        description: `Stay focused with the cutest gamified timer.
        Forest provides an interesting solution to save you from phone addiction.
        Plant a seed, and as you focus on your work, it grows into a tree.
        If you leave the app to check social media, your tree withers away.
        Build a lush forest representing your focused time and contribute to real-world tree planting.
        Stop getting distracted and start getting things done in a fun, eco-friendly way.
        Track your deep work sessions with detailed statistics and history logs.
        Set custom focus durations and break intervals to match your workflow.
        Perfect for students and professionals who want visual motivation.`,
        size: 258,
        reviews: 54000,
        ratingAvg: 4.8,
        downloads: 9000000,
        ratings: [
            { name: "1 star", count: 100 },
            { name: "2 star", count: 200 },
            { name: "3 star", count: 500 },
            { name: "4 star", count: 1000 },
            { name: "5 star", count: 52200 }
        ]
    },
    {
        image: app2,
        title: "SmPlan: ToDo List With Reminder",
        companyName: "Productive.io",
        id: 2,
        description: `Plan your day with ease and never miss a deadline.
        SmPlan is your ultimate companion for organizing daily tasks and long-term goals.
        With intuitive reminders, you can stay on top of your schedule effortlessly.
        Prioritize your to-do list, set recurring tasks, and track your progress over time.
        Whether it's work projects, study schedules, or personal errands, SmPlan keeps you productive.
        Experience a clutter-free interface that helps you focus on what truly matters.
        Organize tasks with tags, categories, and smart filters.
        Sync across devices so your plans are always available.
        Great for structured daily and weekly planning.`,
        size: 150,
        reviews: 32000,
        ratingAvg: 4.5,
        downloads: 5000000,
        ratings: [
            { name: "1 star", count: 500 },
            { name: "2 star", count: 500 },
            { name: "3 star", count: 1000 },
            { name: "4 star", count: 5000 },
            { name: "5 star", count: 25000 }
        ]
    },
    {
        image: app3,
        title: "FLIP - Focus Timer For Study",
        companyName: "FLIP Corp",
        id: 3,
        description: `Measure your study time and focus level with precision.
        FLIP helps you track your study habits and improve your concentration effectively.
        Analyze your daily, weekly, and monthly study statistics to find your peak hours.
        Join study groups worldwide and get motivated by seeing others focus in real-time.
        Use the pomodoro timer or stopwatch mode to suit your personal learning style.
        Turn your study sessions into a consistent habit and achieve your academic goals.
        Compare performance trends and identify distractions.
        Compete on leaderboards with friends and classmates.
        Designed especially for serious learners.`,
        size: 120,
        reviews: 15000,
        ratingAvg: 4.2,
        downloads: 2000000,
        ratings: [
            { name: "1 star", count: 1000 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 2000 },
            { name: "4 star", count: 3000 },
            { name: "5 star", count: 8000 }
        ]
    },
    {
        image: app4,
        title: "Pomocat - Cute Pomodoro Timer",
        companyName: "CatLabs",
        id: 4,
        description: `A cute cat-themed timer for productivity that makes working fun.
        Pomocat combines the effective Pomodoro technique with adorable feline companions.
        Collect different cats as you complete your focus sessions and build your collection.
        Customize your timer settings to match your workflow, whether for study or work.
        Enjoy relaxing background sounds that help you stay in the zone while you focus.
        Let these cute virtual pets motivate you to stay productive and avoid burnout.
        Unlock themes and rewards as you maintain streaks.
        Great for users who like playful productivity tools.`,
        size: 80,
        reviews: 8000,
        ratingAvg: 4.9,
        downloads: 1000000,
        ratings: [
            { name: "1 star", count: 50 },
            { name: "2 star", count: 50 },
            { name: "3 star", count: 100 },
            { name: "4 star", count: 800 },
            { name: "5 star", count: 7000 }
        ]
    },
    {
        image: app5,
        title: "Time Planner: Schedule & Tasks",
        companyName: "Oleksandr Albul",
        id: 5,
        description: `Advanced time planning and scheduling app for professionals and students.
        Time Planner integrates your calendar, to-do list, and habit tracker in one place.
        Visualize your day with a clear timeline and adjust your schedule with drag-and-drop ease.
        Gain insights into how you spend your time with detailed analytics and reports.
        Set specific goals for different categories of your life and track your journey.
        Master your time management skills and achieve a perfect work-life balance.
        Build structured routines and long-term plans.
        Supports color-coded categories for better clarity.`,
        size: 200,
        reviews: 45000,
        ratingAvg: 4.6,
        downloads: 8000000,
        ratings: [
            { name: "1 star", count: 200 },
            { name: "2 star", count: 300 },
            { name: "3 star", count: 1000 },
            { name: "4 star", count: 5000 },
            { name: "5 star", count: 38500 }
        ]
    },
    {
        image: app6,
        title: "Morning Habits - Daily Routine",
        companyName: "Habitify",
        id: 6,
        description: `Build good habits and break bad ones to transform your daily routine.
        Morning Habits is designed to help you stick to your goals with consistent tracking.
        Create a personalized routine that starts your day off on the right foot.
        Get daily reminders and motivational quotes to keep you inspired and on track.
        Monitor your streaks and celebrate small victories as you build a better lifestyle.
        From drinking water to reading more, make self-improvement a daily reality.
        View habit completion charts and weekly summaries.
        Ideal for routine building and behavior change.`,
        size: 95,
        reviews: 20000,
        ratingAvg: 4.4,
        downloads: 3500000,
        ratings: [
            { name: "1 star", count: 500 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 2000 },
            { name: "4 star", count: 4000 },
            { name: "5 star", count: 12500 }
        ]
    },
    {
        image: app1,
        title: "Focus Plant: Pomodoro Forest",
        companyName: "Shikudo",
        id: 7,
        description: `Gamified focus timer to help you beat phone addiction.
        Focus Plant turns productivity sessions into a rewarding game.
        Grow virtual plants and expand your garden as you complete sessions.
        Use structured Pomodoro cycles for deep work.
        Track daily and weekly focus reports.
        Join global challenges and compete with friends.
        Visual progress keeps motivation high.
        Perfect for students and remote workers.`,
        size: 180,
        reviews: 25000,
        ratingAvg: 4.7,
        downloads: 4000000,
        ratings: [
            { name: "1 star", count: 100 },
            { name: "2 star", count: 200 },
            { name: "3 star", count: 700 },
            { name: "4 star", count: 2000 },
            { name: "5 star", count: 22000 }
        ]
    },
    {
        image: app2,
        title: "Alarmy - Alarm Clock & Sleep",
        companyName: "Delight Room",
        id: 8,
        description: `Wake up successfully with the world's most annoying alarm.
        Requires missions like math problems or photo tasks to dismiss.
        Designed for heavy sleepers.
        Includes bedtime reminders and sleep tracking.
        Multiple alarm styles available.
        Prevents snoozing abuse.
        Helps build a strong morning routine.
        Reliable for important schedules.`,
        size: 300,
        reviews: 100000,
        ratingAvg: 4.6,
        downloads: 15000000,
        ratings: [
            { name: "1 star", count: 2000 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 3000 },
            { name: "4 star", count: 14000 },
            { name: "5 star", count: 80000 }
        ]
    },
    {
        image: app3,
        title: "Sleep Cycle - Sleep Tracker",
        companyName: "Sleep Cycle AB",
        id: 9,
        description: `Track your sleep patterns and wake up refreshed.
        Uses smart analysis of sleep stages.
        Wakes you during light sleep for easier mornings.
        Provides charts and long-term trends.
        Includes snore detection.
        Add sleep notes and tags.
        Personalized sleep insights.
        Great for optimizing rest quality.`,
        size: 220,
        reviews: 60000,
        ratingAvg: 4.5,
        downloads: 12000000,
        ratings: [
            { name: "1 star", count: 1000 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 3000 },
            { name: "4 star", count: 10000 },
            { name: "5 star", count: 45000 }
        ]
    },
    {
        image: app4,
        title: "Calm - Sleep, Meditate, Relax",
        companyName: "Calm.com",
        id: 10,
        description: `Sleep more. Stress less. Live better.
        Offers guided meditation and breathing programs.
        Includes sleep stories and relaxing audio.
        New expert content added regularly.
        Programs for anxiety and focus.
        Suitable for beginners and advanced users.
        Builds daily mindfulness habits.
        Widely used for mental wellness.`,
        size: 150,
        reviews: 500000,
        ratingAvg: 4.8,
        downloads: 100000000,
        ratings: [
            { name: "1 star", count: 5000 },
            { name: "2 star", count: 5000 },
            { name: "3 star", count: 10000 },
            { name: "4 star", count: 30000 },
            { name: "5 star", count: 450000 }
        ]
    },
    {
        image: app5,
        title: "Headspace: Mindful Meditation",
        companyName: "Headspace Inc.",
        id: 11,
        description: `Meditation and sleep made simple.
        Structured meditation courses.
        Quick daily guided sessions.
        Stress and focus programs.
        Sleepcasts and calming sounds.
        Progress tracking and streaks.
        Science-backed methods.
        Easy for busy schedules.`,
        size: 140,
        reviews: 300000,
        ratingAvg: 4.7,
        downloads: 50000000,
        ratings: [
            { name: "1 star", count: 2000 },
            { name: "2 star", count: 2000 },
            { name: "3 star", count: 5000 },
            { name: "4 star", count: 20000 },
            { name: "5 star", count: 271000 }
        ]
    },
    {
        image: app6,
        title: "Todoist: To-Do List & Planner",
        companyName: "Doist",
        id: 12,
        description: `Organize your life and work.
        Capture and manage tasks quickly.
        Use projects, labels, and priorities.
        Supports recurring schedules.
        Team collaboration features.
        Calendar integrations.
        Productivity reports included.
        Suitable for personal and professional planning.`,
        size: 110,
        reviews: 250000,
        ratingAvg: 4.8,
        downloads: 30000000,
        ratings: [
            { name: "1 star", count: 1000 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 3000 },
            { name: "4 star", count: 10000 },
            { name: "5 star", count: 235000 }
        ]
    }
];

export default apps;
