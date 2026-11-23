export const ncertSolutionsData = {
  "c12-phy-1": {
    subjectName: "Physics",
    classLevel: "12",
    chapterNumber: 1,
    chapterTitle: "Electric Charges and Fields",
    totalExercises: 24,
    questions: [
      {
        id: "c12-phy-1-q1",
        exercise: "Exercise 1.1",
        question: "What is the force between two small charged spheres having charges of 2 × 10⁻⁷ C and 3 × 10⁻⁷ C placed 30 cm apart in air?",
        difficulty: "Easy",
        marks: 2,
        steps: [
          {
            stepNumber: 1,
            title: "Given Data & Standard SI Units",
            content: "Charge q₁ = 2 × 10⁻⁷ C\nCharge q₂ = 3 × 10⁻⁷ C\nSeparation distance r = 30 cm = 0.3 m\nPermittivity of free space constant 1 / (4πε₀) = 9 × 10⁹ N·m²/C²"
          },
          {
            stepNumber: 2,
            title: "Formula Application (Coulomb's Law)",
            content: "According to Coulomb's Law of electrostatics:\nF = (1 / 4πε₀) × (|q₁ · q₂| / r²)"
          },
          {
            stepNumber: 3,
            title: "Calculation & Simplification",
            content: "F = (9 × 10⁹ × 2 × 10⁻⁷ × 3 × 10⁻⁷) / (0.3)²\nF = (54 × 10⁻⁵) / 0.09 = 6 × 10⁻³ N"
          },
          {
            stepNumber: 4,
            title: "Nature of Force",
            content: "Since both charges are positive (like charges), the electrostatic force is repulsive in nature."
          }
        ],
        answer: "F = 6 × 10⁻³ N (Repulsive)",
        keyInsight: "Always convert centimeters to meters before squaring the distance r."
      },
      {
        id: "c12-phy-1-q2",
        exercise: "Exercise 1.2",
        question: "The electrostatic force on a small sphere of charge 0.4 μC due to another small sphere of charge -0.8 μC in air is 0.2 N. (a) What is the distance between the two spheres? (b) What is the force on the second sphere due to the first?",
        difficulty: "Medium",
        marks: 3,
        steps: [
          {
            stepNumber: 1,
            title: "Given Parameters",
            content: "q₁ = 0.4 μC = 0.4 × 10⁻⁶ C\nq₂ = -0.8 μC = -0.8 × 10⁻⁶ C\nAttractive force F = 0.2 N"
          },
          {
            stepNumber: 2,
            title: "Part (a): Solving for Separation r",
            content: "F = (1 / 4πε₀) × (|q₁ · q₂| / r²)\n0.2 = (9 × 10⁹ × 0.4 × 10⁻⁶ × 0.8 × 10⁻⁶) / r²\nr² = (9 × 10⁹ × 0.32 × 10⁻¹²) / 0.2 = (2.88 × 10⁻³) / 0.2 = 1.44 × 10⁻² m²\nr = √(0.0144) = 0.12 m = 12 cm"
          },
          {
            stepNumber: 3,
            title: "Part (b): Action-Reaction Symmetry",
            content: "By Newton's Third Law of Motion, the electrostatic force experienced by the second sphere due to the first is equal in magnitude and opposite in direction: F₂₁ = 0.2 N (attractive, towards sphere 1)."
          }
        ],
        answer: "(a) Distance r = 12 cm; (b) Force F = 0.2 N (Attractive)",
        keyInsight: "Electrostatic forces are mutual central forces obeying Newton's third law."
      },
      {
        id: "c12-phy-1-q3",
        exercise: "Exercise 1.7",
        question: "(a) An electrostatic field line is a continuous curve. That is, a field line cannot have sudden breaks. Why not? (b) Explain why two field lines never cross each other at any point.",
        difficulty: "Conceptual",
        marks: 3,
        steps: [
          {
            stepNumber: 1,
            title: "Reasoning for Continuity",
            content: "An electric field line represents the actual trajectory along which a tiny positive test charge moves. A charge experiences continuous electrostatic force across space; it cannot vanish at one instant and reappear at another without passing intermediate points. Hence, field lines have no sudden breaks."
          },
          {
            stepNumber: 2,
            title: "Reasoning why Field Lines Never Intersect",
            content: "The tangent drawn at any point on an electric field line indicates the unique direction of the net electric field vector at that point. If two field lines were to intersect, one could draw two distinct tangents at the single point of intersection. This would imply two different directions of net electric force simultaneously at one point, which is physically impossible."
          }
        ],
        answer: "Field lines are continuous because electric force is continuous. They never cross because net field direction must be unique.",
        keyInsight: "Direct 3-mark conceptual question frequently asked in CBSE Board exams."
      }
    ]
  },
  "c12-chem-1": {
    subjectName: "Chemistry",
    classLevel: "12",
    chapterNumber: 1,
    chapterTitle: "Solutions",
    totalExercises: 32,
    questions: [
      {
        id: "c12-chem-1-q1",
        exercise: "In-Text Question 1.4",
        question: "Calculate the mass of urea (NH₂CONH₂) required in making 2.5 kg of 0.25 molal aqueous solution.",
        difficulty: "Easy-Medium",
        marks: 3,
        steps: [
          {
            stepNumber: 1,
            title: "Molar Mass of Urea",
            content: "Molar mass of NH₂CONH₂ = 2×(14) + 4×(1) + 12 + 16 = 28 + 4 + 12 + 16 = 60 g/mol."
          },
          {
            stepNumber: 2,
            title: "Understanding 0.25 Molal Solution",
            content: "0.25 molal aqueous solution means 0.25 moles of urea are dissolved in 1000 g (1 kg) of water.\nMass of urea in 1 kg water = 0.25 mol × 60 g/mol = 15 g.\nTotal mass of this solution = mass of solute + mass of solvent = 15 g + 1000 g = 1015 g = 1.015 kg."
          },
          {
            stepNumber: 3,
            title: "Scaling to 2.5 kg of Solution",
            content: "1.015 kg of solution contains 15 g of urea.\nTherefore, 2.5 kg of solution requires:\nMass of urea = (15 g / 1.015 kg) × 2.5 kg = 36.95 g ≈ 37 g."
          }
        ],
        answer: "Mass of urea required = 36.95 g",
        keyInsight: "Remember that molality is moles per kg of SOLVENT, whereas the given 2.5 kg is the TOTAL MASS OF SOLUTION."
      },
      {
        id: "c12-chem-1-q2",
        exercise: "Exercise 1.9",
        question: "A solution of glucose in water is labelled as 10% w/w. What would be the molality and mole fraction of each component in the solution? If the density of solution is 1.2 g/mL, what shall be the molarity?",
        difficulty: "Medium-Hard",
        marks: 5,
        steps: [
          {
            stepNumber: 1,
            title: "Basis of 100 g Solution",
            content: "10% w/w means 10 g of glucose (C₆H₁₂O₆) is present in 100 g of solution.\nMass of solvent (water) = 100 g - 10 g = 90 g = 0.090 kg.\nMolar mass of glucose = 180 g/mol. Molar mass of water = 18 g/mol.\nMoles of glucose n₁ = 10 / 180 = 0.0555 mol.\nMoles of water n₂ = 90 / 18 = 5.0 mol."
          },
          {
            stepNumber: 2,
            title: "Calculating Molality",
            content: "Molality (m) = moles of solute / mass of solvent in kg = 0.0555 / 0.090 = 0.617 m (or mol/kg)."
          },
          {
            stepNumber: 3,
            title: "Calculating Mole Fraction",
            content: "Total moles = 0.0555 + 5.0 = 5.0555 mol.\nMole fraction of glucose (x_glucose) = 0.0555 / 5.0555 = 0.011.\nMole fraction of water (x_water) = 1 - 0.011 = 0.989."
          },
          {
            stepNumber: 4,
            title: "Calculating Molarity using Density",
            content: "Volume of 100 g solution = mass / density = 100 g / 1.2 g·mL⁻¹ = 83.33 mL = 0.08333 L.\nMolarity (M) = moles of solute / volume in litres = 0.0555 / 0.08333 = 0.67 M."
          }
        ],
        answer: "Molality = 0.617 m, x_glucose = 0.011, x_water = 0.989, Molarity = 0.67 M",
        keyInsight: "Always assume 100 g of solution when mass percentage (w/w) is specified."
      }
    ]
  },
  "c12-math-5": {
    subjectName: "Mathematics",
    classLevel: "12",
    chapterNumber: 5,
    chapterTitle: "Integrals",
    totalExercises: 58,
    questions: [
      {
        id: "c12-math-5-q1",
        exercise: "Exercise 7.2 - Q1",
        question: "Integrate the function: 2x / (1 + x²)",
        difficulty: "Easy",
        marks: 2,
        steps: [
          {
            stepNumber: 1,
            title: "Method of Substitution",
            content: "Let t = 1 + x²\nDifferentiating with respect to x:\ndt / dx = 2x  =>  dt = 2x dx"
          },
          {
            stepNumber: 2,
            title: "Rewriting the Integral",
            content: "∫ [2x / (1 + x²)] dx = ∫ (1 / t) dt = ln|t| + C"
          },
          {
            stepNumber: 3,
            title: "Back-substituting t",
            content: "Substitute t = 1 + x² back into the expression:\n= ln(1 + x²) + C  (Note: 1 + x² is always positive, so absolute value bar is omitted)."
          }
        ],
        answer: "ln(1 + x²) + C",
        keyInsight: "Whenever the numerator is the exact derivative of the denominator, the integral is ln|denominator|."
      },
      {
        id: "c12-math-5-q2",
        exercise: "Exercise 7.6 - Q3 (By Parts)",
        question: "Find the integral: ∫ x² · eˣ dx",
        difficulty: "Medium",
        marks: 3,
        steps: [
          {
            stepNumber: 1,
            title: "Rule of ILATE Selection",
            content: "Here x² is Algebraic (A) and eˣ is Exponential (E).\nBy ILATE rule: First function u = x², Second function v = eˣ.\nFormula: ∫ u·v dx = u ∫ v dx - ∫ [u' · (∫ v dx)] dx"
          },
          {
            stepNumber: 2,
            title: "First Application of By Parts",
            content: "= x² (eˣ) - ∫ (2x · eˣ) dx\n= x² eˣ - 2 ∫ (x · eˣ) dx"
          },
          {
            stepNumber: 3,
            title: "Second Application for ∫ (x · eˣ) dx",
            content: "Let u = x, v = eˣ:\n∫ x eˣ dx = x eˣ - ∫ (1 · eˣ) dx = x eˣ - eˣ.\nSubstitute back:\n= x² eˣ - 2 [x eˣ - eˣ] + C\n= eˣ (x² - 2x + 2) + C"
          }
        ],
        answer: "eˣ (x² - 2x + 2) + C",
        keyInsight: "Polynomials of degree 'n' multiplied by eˣ require 'n' successive integrations by parts."
      }
    ]
  }
};
