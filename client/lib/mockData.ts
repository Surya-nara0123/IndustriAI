export const projectData = [
  {
    id: 1,
    name: "Solar Farm",
    esgScore: 85,
    roi: 12,
    risk: "Low",
    budget: 5000000,
  },
  {
    id: 2,
    name: "Wind Farm",
    esgScore: 78,
    roi: 10,
    risk: "Medium",
    budget: 8000000,
  },
  {
    id: 3,
    name: "Hydroelectric Plant",
    esgScore: 72,
    roi: 15,
    risk: "High",
    budget: 12000000,
  },
  {
    id: 4,
    name: "Geothermal Project",
    esgScore: 80,
    roi: 11,
    risk: "Medium",
    budget: 6000000,
  },
  {
    id: 5,
    name: "Biomass Facility",
    esgScore: 68,
    roi: 9,
    risk: "Low",
    budget: 4000000,
  },
];

export const overallMetrics = {
  totalProjects: 5,
  averageEsgScore: 76.6,
  totalBudget: 35000000,
  averageRoi: 11.4,
};

export const esgBreakdown = [
  { name: "Environmental", value: 50 },
  { name: "Social", value: 30 },
  { name: "Governance", value: 20 },
];

export const monthlyPerformance = [
  { month: "Jan", esgScore: 70, roi: 8 },
  { month: "Feb", esgScore: 72, roi: 9 },
  { month: "Mar", esgScore: 75, roi: 10 },
  { month: "Apr", esgScore: 78, roi: 11 },
  { month: "May", esgScore: 76, roi: 10.5 },
  { month: "Jun", esgScore: 77, roi: 11 },
];
