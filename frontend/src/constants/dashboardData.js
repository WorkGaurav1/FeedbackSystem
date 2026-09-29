import {
  Trophy,
  TrendingUp,
  Scale,
  Handshake,
  Flag,
  Sprout,
  MessageCircle,
  Lightbulb,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

const dashboardData = [
  {
    id: 1,
    name: "Leadership",
    icon: Trophy,
    positive: 23,
    negative: 5,
    description: "Ability to lead, inspire and guide others.",
  },

  {
    id: 2,
    name: "Productivity",
    icon: TrendingUp,
    positive: 18,
    negative: 7,
    description: "Efficiency, output and achieving goals.",
  },

  {
    id: 3,
    name: "Work Quality",
    icon: Scale,
    positive: 12,
    negative: 12,
    description: "Quality, accuracy and attention to detail.",
  },

  {
    id: 4,
    name: "Teamwork",
    icon: Handshake,
    positive: 20,
    negative: 6,
    description: "Collaboration and working effectively with others.",
  },

  {
    id: 5,
    name: "Reliability",
    icon: Flag,
    positive: 8,
    negative: 14,
    description: "Dependability, consistency and commitment.",
  },

  {
    id: 6,
    name: "Adaptability",
    icon: Sprout,
    positive: 16,
    negative: 8,
    description: "Ability to adjust and thrive in change.",
  },

  {
    id: 7,
    name: "Communication",
    icon: MessageCircle,
    positive: 15,
    negative: 15,
    description: "Clarity, listening and effective communication.",
  },

  {
    id: 8,
    name: "Innovation",
    icon: Lightbulb,
    positive: 21,
    negative: 4,
    description: "Creativity, ideas and problem-solving.",
  },

  {
    id: 9,
    name: "Accountability",
    icon: ClipboardCheck,
    positive: 7,
    negative: 13,
    description: "Ownership, responsibility and follow through.",
  },

  {
    id: 10,
    name: "Time Management",
    icon: Clock3,
    positive: 11,
    negative: 11,
    description: "Planning, prioritizing and meeting deadlines.",
  },
];

export default dashboardData;
