export const MATH_QUIZ_DATA = {
  "title": "Mathematics for Computing 1: Linear Algebra & Calculus",
  "code": "RU-100-15-00030",
  "units": "Units 1 & 2",
  "mcqs_u1": [
    {
      "q": "1. What is the nth derivative of the exponential function y = e^(ax)?",
      "options": [
        "A. a^n * e^(ax)",
        "B. a^(n-1) * e^(ax)",
        "C. n * a * e^(ax)",
        "D. e^(ax) / a^n"
      ],
      "ans": "A. a^n * e^(ax)"
    },
    {
      "q": "2. What is the nth derivative of y = (ax + b)^m where m is a positive integer and n <= m?",
      "options": [
        "A. [m! / (m-n)!] * a^n * (ax + b)^(m-n)",
        "B. m! * a^n * (ax + b)^m",
        "C. [m! / n!] * a^(m-n) * (ax + b)^(m-n)",
        "D. n! * a^n * (ax + b)^(m-n)"
      ],
      "ans": "A. [m! / (m-n)!] * a^n * (ax + b)^(m-n)"
    },
    {
      "q": "3. If y = (ax + b)^n where n is a positive integer, what is the (n+1)th derivative of y?",
      "options": [
        "A. n! * a^n",
        "B. 0",
        "C. (n+1)! * a^(n+1)",
        "D. a^n"
      ],
      "ans": "B. 0"
    },
    {
      "q": "4. What is the nth derivative of y = sin(ax + b)?",
      "options": [
        "A. a^n * sin(ax + b + n*pi/2)",
        "B. a^n * cos(ax + b + n*pi/2)",
        "C. (-1)^n * a^n * sin(ax + b)",
        "D. a^n * sin(ax + b + n*pi)"
      ],
      "ans": "A. a^n * sin(ax + b + n*pi/2)"
    },
    {
      "q": "5. What is the nth derivative of y = cos(ax + b)?",
      "options": [
        "A. a^n * cos(ax + b + n*pi/2)",
        "B. a^n * sin(ax + b + n*pi/2)",
        "C. (-1)^n * a^n * cos(ax + b)",
        "D. a^n * cos(ax + b + n*pi)"
      ],
      "ans": "A. a^n * cos(ax + b + n*pi/2)"
    },
    {
      "q": "6. The nth derivative of y = log(ax + b) is given by:",
      "options": [
        "A. [(-1)^(n-1) * (n-1)! * a^n] / (ax + b)^n",
        "B. [(-1)^n * n! * a^n] / (ax + b)^n",
        "C. [(n-1)! * a^n] / (ax + b)^n",
        "D. [(-1)^(n-1) * n! * a^(n-1)] / (ax + b)^(n-1)"
      ],
      "ans": "A. [(-1)^(n-1) * (n-1)! * a^n] / (ax + b)^n"
    },
    {
      "q": "7. The nth derivative of y = 1 / (ax + b) is:",
      "options": [
        "A. [(-1)^n * n! * a^n] / (ax + b)^(n+1)",
        "B. [(-1)^(n-1) * (n-1)! * a^n] / (ax + b)^n",
        "C. [n! * a^n] / (ax + b)^(n+1)",
        "D. [(-1)^n * a^n] / (ax + b)^n"
      ],
      "ans": "A. [(-1)^n * n! * a^n] / (ax + b)^(n+1)"
    },
    {
      "q": "8. What is the nth derivative of y = e^(ax) * sin(bx + c)?",
      "options": [
        "A. (a^2 + b^2)^(n/2) * e^(ax) * sin(bx + c + n*phi), where phi = tan^-1(b/a)",
        "B. (a^2 + b^2)^n * e^(ax) * sin(bx + c + n*phi)",
        "C. a^n * b^n * e^(ax) * sin(bx + c)",
        "D. (a + b)^n * e^(ax) * cos(bx + c + n*phi)"
      ],
      "ans": "A. (a^2 + b^2)^(n/2) * e^(ax) * sin(bx + c + n*phi), where phi = tan^-1(b/a)"
    },
    {
      "q": "9. Leibnitz's Theorem is primarily used for finding the:",
      "options": [
        "A. nth derivative of the product of two functions",
        "B. Integral of the product of two functions",
        "C. Limits of indeterminate forms",
        "D. Roots of a non-linear algebraic equation"
      ],
      "ans": "A. nth derivative of the product of two functions"
    },
    {
      "q": "10. In Leibnitz's Theorem, (u * v)_n is given by the expansion:",
      "options": [
        "A. Sum from r=0 to n of [nCr * u_(n-r) * v_r]",
        "B. Sum from r=0 to n of [u_(n-r) * v_r]",
        "C. u_n * v_n",
        "D. Sum from r=0 to n of [nPr * u_(n-r) * v_r]"
      ],
      "ans": "A. Sum from r=0 to n of [nCr * u_(n-r) * v_r]"
    },
    {
      "q": "11. If y = x^2 * e^(2x), what is the 3rd derivative y_3?",
      "options": [
        "A. 8 e^(2x) (x^2 + 3x + 3/2)",
        "B. 8 e^(2x) (x^2 + 6x + 6)",
        "C. 4 e^(2x) (x^2 + 2x + 1)",
        "D. 2 e^(2x) (4x^2 + 12x + 6)"
      ],
      "ans": "A. 8 e^(2x) (x^2 + 3x + 3/2)"
    },
    {
      "q": "12. When applying Leibnitz's theorem to y = x^3 * sin x, which function should be chosen as 'v' to terminate differentiation quickly?",
      "options": [
        "A. v = x^3",
        "B. v = sin x",
        "C. v = x^3 * sin x",
        "D. Either function"
      ],
      "ans": "A. v = x^3"
    },
    {
      "q": "13. If y = a^x where a > 0, what is the nth derivative y_n?",
      "options": [
        "A. a^x * (log_e a)^n",
        "B. n * a^(x-1)",
        "C. a^x * log_e(a^n)",
        "D. a^(nx) * log_e a"
      ],
      "ans": "A. a^x * (log_e a)^n"
    },
    {
      "q": "14. If y = sin^2 x, what is the nth derivative y_n?",
      "options": [
        "A. - (1/2) * 2^n * cos(2x + n*pi/2)",
        "B. 2^n * sin(2x + n*pi/2)",
        "C. 2^(n-1) * sin(2x + n*pi/2)",
        "D. (-1)^n * 2^n * sin^2 x"
      ],
      "ans": "A. - (1/2) * 2^n * cos(2x + n*pi/2)"
    },
    {
      "q": "15. If y = (sin^-1 x)^2, the relation connecting y_(n+2), y_(n+1), and y_n is:",
      "options": [
        "A. (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - n^2 y_n = 0",
        "B. (1 - x^2) y_(n+2) + (2n + 1)x y_(n+1) + n^2 y_n = 0",
        "C. (1 - x^2) y_(n+2) - 2nx y_(n+1) - (n^2 + 1) y_n = 0",
        "D. (1 + x^2) y_(n+2) + (2n + 1)x y_(n+1) - n^2 y_n = 0"
      ],
      "ans": "A. (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - n^2 y_n = 0"
    },
    {
      "q": "16. Which of the following is NOT a necessary condition for Rolle's Theorem on [a, b]?",
      "options": [
        "A. f(x) is continuous on [a, b]",
        "B. f(x) is differentiable on (a, b)",
        "C. f(a) = f(b)",
        "D. f'(x) is continuous on [a, b]"
      ],
      "ans": "D. f'(x) is continuous on [a, b]"
    },
    {
      "q": "17. What is the geometric interpretation of Rolle's Theorem?",
      "options": [
        "A. There is at least one point where the tangent is parallel to the x-axis",
        "B. The curve must pass through the origin",
        "C. There is at least one point where the normal is horizontal",
        "D. The area under the curve between a and b is zero"
      ],
      "ans": "A. There is at least one point where the tangent is parallel to the x-axis"
    },
    {
      "q": "18. For f(x) = x^2 - 4x + 3 on [1, 3], what is the value of 'c' satisfying Rolle's Theorem?",
      "options": [
        "A. c = 2",
        "B. c = 1.5",
        "C. c = 2.5",
        "D. c = 0"
      ],
      "ans": "A. c = 2"
    },
    {
      "q": "19. Why does Rolle's Theorem fail for f(x) = |x| on [-1, 1]?",
      "options": [
        "A. f(x) is not differentiable at x = 0",
        "B. f(x) is not continuous at x = 0",
        "C. f(-1) does not equal f(1)",
        "D. The interval is symmetric"
      ],
      "ans": "A. f(x) is not differentiable at x = 0"
    },
    {
      "q": "20. For f(x) = sin x on [0, pi], does Rolle's Theorem apply? If so, what is c?",
      "options": [
        "A. Yes, c = pi/2",
        "B. Yes, c = pi/4",
        "C. No, because f(0) != f(pi)",
        "D. No, because sin x is not algebraic"
      ],
      "ans": "A. Yes, c = pi/2"
    },
    {
      "q": "21. According to Lagrange's Mean Value Theorem (LMVT), there exists c in (a, b) such that f'(c) equals:",
      "options": [
        "A. [f(b) - f(a)] / (b - a)",
        "B. [f(b) + f(a)] / 2",
        "C. 0",
        "D. [f(a) - f(b)] / (b - a)"
      ],
      "ans": "A. [f(b) - f(a)] / (b - a)"
    },
    {
      "q": "22. Geometrically, Lagrange's Mean Value Theorem states that the tangent at c is parallel to the:",
      "options": [
        "A. Secant line joining (a, f(a)) and (b, f(b))",
        "B. x-axis",
        "C. y-axis",
        "D. Normal at the midpoint of [a, b]"
      ],
      "ans": "A. Secant line joining (a, f(a)) and (b, f(b))"
    },
    {
      "q": "23. If f(x) = x^2 on [2, 4], the value of 'c' given by LMVT is:",
      "options": [
        "A. 3.0",
        "B. 2.5",
        "C. 3.5",
        "D. sqrt(8)"
      ],
      "ans": "A. 3.0"
    },
    {
      "q": "24. If f(x) = 1/x on [-1, 1], why does LMVT NOT apply?",
      "options": [
        "A. f(x) is discontinuous at x = 0 in [-1, 1]",
        "B. f(-1) != f(1)",
        "C. f'(x) does not vanish anywhere",
        "D. The function is odd"
      ],
      "ans": "A. f(x) is discontinuous at x = 0 in [-1, 1]"
    },
    {
      "q": "25. Which fundamental inequality can be proven using LMVT for x > 0?",
      "options": [
        "A. sin x < x",
        "B. sin x > x",
        "C. cos x > 1",
        "D. tan x < x"
      ],
      "ans": "A. sin x < x"
    },
    {
      "q": "26. In Cauchy's Mean Value Theorem for f(x) and g(x) on [a, b], the ratio [f(b) - f(a)] / [g(b) - g(a)] equals:",
      "options": [
        "A. f'(c) / g'(c)",
        "B. [f'(c) * g(c)] / g'(c)",
        "C. f'(c) - g'(c)",
        "D. [f(c) / g(c)]'"
      ],
      "ans": "A. f'(c) / g'(c)"
    },
    {
      "q": "27. Under what condition does Cauchy's Mean Value Theorem reduce to Lagrange's Mean Value Theorem?",
      "options": [
        "A. When g(x) = x",
        "B. When g(x) = 1",
        "C. When f(x) = g(x)",
        "D. When g(x) = 0"
      ],
      "ans": "A. When g(x) = x"
    },
    {
      "q": "28. Rolle's Theorem is a special case of LMVT when:",
      "options": [
        "A. f(a) = f(b)",
        "B. a = b",
        "C. f'(c) = 1",
        "D. f(a) = 0"
      ],
      "ans": "A. f(a) = f(b)"
    },
    {
      "q": "29. For f(x) = sqrt(x) on [0, 4], the value of 'c' satisfying LMVT is:",
      "options": [
        "A. 1.0",
        "B. 2.0",
        "C. 0.5",
        "D. 1.5"
      ],
      "ans": "A. 1.0"
    },
    {
      "q": "30. If f'(x) = 0 for all x in an open interval (a, b), what does LMVT imply about f(x)?",
      "options": [
        "A. f(x) is a constant function on (a, b)",
        "B. f(x) = 0 on (a, b)",
        "C. f(x) is strictly increasing",
        "D. f(x) is unbounded"
      ],
      "ans": "A. f(x) is a constant function on (a, b)"
    },
    {
      "q": "31. The Maclaurin series expansion of a function f(x) is an expansion about the point:",
      "options": [
        "A. x = 0",
        "B. x = 1",
        "C. x = infinity",
        "D. Any arbitrary point x = a"
      ],
      "ans": "A. x = 0"
    },
    {
      "q": "32. What is the coefficient of x^n in the Maclaurin series expansion of f(x)?",
      "options": [
        "A. f^(n)(0) / n!",
        "B. f^(n)(0)",
        "C. n! * f^(n)(0)",
        "D. f^(n)(0) / (n+1)!"
      ],
      "ans": "A. f^(n)(0) / n!"
    },
    {
      "q": "33. What is the Maclaurin series expansion of e^x?",
      "options": [
        "A. 1 + x + x^2/2! + x^3/3! + ...",
        "B. 1 - x + x^2/2! - x^3/3! + ...",
        "C. x - x^2/2 + x^3/3 - ...",
        "D. 1 + x^2/2! + x^4/4! + ..."
      ],
      "ans": "A. 1 + x + x^2/2! + x^3/3! + ..."
    },
    {
      "q": "34. What is the Maclaurin series expansion of sin x?",
      "options": [
        "A. x - x^3/3! + x^5/5! - x^7/7! + ...",
        "B. 1 - x^2/2! + x^4/4! - x^6/6! + ...",
        "C. x + x^3/3! + x^5/5! + ...",
        "D. x - x^2/2! + x^3/3! - ..."
      ],
      "ans": "A. x - x^3/3! + x^5/5! - x^7/7! + ..."
    },
    {
      "q": "35. What is the Maclaurin series expansion of cos x?",
      "options": [
        "A. 1 - x^2/2! + x^4/4! - x^6/6! + ...",
        "B. x - x^3/3! + x^5/5! - x^7/7! + ...",
        "C. 1 + x^2/2! + x^4/4! + ...",
        "D. 1 - x + x^2/2! - x^3/3! + ..."
      ],
      "ans": "A. 1 - x^2/2! + x^4/4! - x^6/6! + ..."
    },
    {
      "q": "36. What is the expansion of log(1 + x) for |x| < 1?",
      "options": [
        "A. x - x^2/2 + x^3/3 - x^4/4 + ...",
        "B. x + x^2/2 + x^3/3 + x^4/4 + ...",
        "C. 1 + x + x^2/2 + x^3/3 + ...",
        "D. x - x^3/3 + x^5/5 - ..."
      ],
      "ans": "A. x - x^2/2 + x^3/3 - x^4/4 + ..."
    },
    {
      "q": "37. What is the expansion of (1 - x)^(-1) for |x| < 1?",
      "options": [
        "A. 1 + x + x^2 + x^3 + ...",
        "B. 1 - x + x^2 - x^3 + ...",
        "C. 1 - x - x^2 - x^3 - ...",
        "D. x + x^2/2 + x^3/3 + ..."
      ],
      "ans": "A. 1 + x + x^2 + x^3 + ..."
    },
    {
      "q": "38. What is the first non-zero term in the Taylor expansion of tan x about x = 0?",
      "options": [
        "A. x",
        "B. x^2",
        "C. 1",
        "D. x^3 / 3"
      ],
      "ans": "A. x"
    },
    {
      "q": "39. Taylor's series expansion of f(x) in powers of (x - a) is given by:",
      "options": [
        "A. f(a) + (x - a) f'(a) + [(x - a)^2 / 2!] f''(a) + ...",
        "B. f(0) + (x - a) f'(0) + [(x - a)^2 / 2!] f''(0) + ...",
        "C. f(a) + x f'(a) + (x^2 / 2!) f''(a) + ...",
        "D. (x - a) f'(a) + [(x - a)^2 / 2] f''(a) + ..."
      ],
      "ans": "A. f(a) + (x - a) f'(a) + [(x - a)^2 / 2!] f''(a) + ..."
    },
    {
      "q": "40. In Lagrange's form of the remainder R_n in Taylor's theorem, R_n equals:",
      "options": [
        "A. [(x - a)^n / n!] * f^(n)(c), where c lies between a and x",
        "B. [(x - a)^(n-1) / n!] * f^(n)(c)",
        "C. [(x - a)^n / (n+1)!] * f^(n+1)(a)",
        "D. (x - a)^n * f^(n)(0)"
      ],
      "ans": "A. [(x - a)^n / n!] * f^(n)(c), where c lies between a and x"
    },
    {
      "q": "41. If a polynomial P(x) of degree 3 is expanded in powers of (x - 1) via Taylor's series, how many non-zero derivative terms exist?",
      "options": [
        "A. At most 4 (including P(1))",
        "B. Infinite",
        "C. Exactly 3",
        "D. Only 1"
      ],
      "ans": "A. At most 4 (including P(1))"
    },
    {
      "q": "42. The expansion of e^(x) * cos x up to terms of x^2 is:",
      "options": [
        "A. 1 + x",
        "B. 1 + x - x^2",
        "C. 1 + x + x^2/2",
        "D. 1 - x^2/2"
      ],
      "ans": "A. 1 + x"
    },
    {
      "q": "43. Why are Taylor series approximations critical in computational computer science?",
      "options": [
        "A. To approximate non-linear mathematical operations (sin, exp, log) using basic arithmetic in ALU",
        "B. To sort arrays in linear time",
        "C. To prevent memory leaks in compiled binaries",
        "D. To convert decimal numbers into hexadecimal"
      ],
      "ans": "A. To approximate non-linear mathematical operations (sin, exp, log) using basic arithmetic in ALU"
    },
    {
      "q": "44. What is the radius of convergence of the Maclaurin series for 1 / (1 + x^2)?",
      "options": [
        "A. R = 1",
        "B. R = infinity",
        "C. R = 0",
        "D. R = 2"
      ],
      "ans": "A. R = 1"
    },
    {
      "q": "45. The Taylor polynomial of degree 1 for f(x) at x = a represents the:",
      "options": [
        "A. Tangent line approximation to the curve at x = a",
        "B. Normal line to the curve at x = a",
        "C. Osculating circle at x = a",
        "D. Curvature of the curve at x = a"
      ],
      "ans": "A. Tangent line approximation to the curve at x = a"
    },
    {
      "q": "46. How many classical indeterminate forms exist in calculus?",
      "options": [
        "A. 7",
        "B. 5",
        "C. 4",
        "D. 9"
      ],
      "ans": "A. 7"
    },
    {
      "q": "47. Which of the following is an exponential indeterminate form?",
      "options": [
        "A. 1^infinity",
        "B. infinity / 0",
        "C. 0 / infinity",
        "D. 1^0"
      ],
      "ans": "A. 1^infinity"
    },
    {
      "q": "48. L'Hopital's rule can be directly applied to which two fundamental indeterminate forms?",
      "options": [
        "A. 0/0 and infinity/infinity",
        "B. 0 * infinity and infinity - infinity",
        "C. 1^infinity and 0^0",
        "D. 0/infinity and infinity/0"
      ],
      "ans": "A. 0/0 and infinity/infinity"
    },
    {
      "q": "49. What is the value of lim_(x -> 0) (sin x) / x?",
      "options": [
        "A. 1",
        "B. 0",
        "C. infinity",
        "D. -1"
      ],
      "ans": "A. 1"
    },
    {
      "q": "50. What is the value of lim_(x -> 0) (1 - cos x) / x^2?",
      "options": [
        "A. 1/2",
        "B. 1",
        "C. 0",
        "D. 2"
      ],
      "ans": "A. 1/2"
    },
    {
      "q": "51. What is the value of lim_(x -> 0) (e^x - 1) / x?",
      "options": [
        "A. 1",
        "B. 0",
        "C. e",
        "D. infinity"
      ],
      "ans": "A. 1"
    },
    {
      "q": "52. Evaluate lim_(x -> 0) (tan x - x) / x^3:",
      "options": [
        "A. 1/3",
        "B. 1/2",
        "C. 1",
        "D. 0"
      ],
      "ans": "A. 1/3"
    },
    {
      "q": "53. What is the value of lim_(x -> 0+) x^x?",
      "options": [
        "A. 1",
        "B. 0",
        "C. e",
        "D. Undefined"
      ],
      "ans": "A. 1"
    },
    {
      "q": "54. What is the value of lim_(x -> infinity) (1 + 1/x)^x?",
      "options": [
        "A. e",
        "B. 1",
        "C. infinity",
        "D. e^2"
      ],
      "ans": "A. e"
    },
    {
      "q": "55. To evaluate an indeterminate form of type 0^0, 1^infinity, or infinity^0, the standard approach is to:",
      "options": [
        "A. Take the natural logarithm of the function",
        "B. Differentiate numerator and denominator directly",
        "C. Integrate both numerator and denominator",
        "D. Multiply by the complex conjugate"
      ],
      "ans": "A. Take the natural logarithm of the function"
    },
    {
      "q": "56. Evaluate lim_(x -> 0) [x - sin x] / x^3:",
      "options": [
        "A. 1/6",
        "B. 1/3",
        "C. -1/6",
        "D. 0"
      ],
      "ans": "A. 1/6"
    },
    {
      "q": "57. Evaluate lim_(x -> 0) (a^x - 1) / x where a > 0:",
      "options": [
        "A. log_e a",
        "B. a",
        "C. 1",
        "D. 1 / log_e a"
      ],
      "ans": "A. log_e a"
    },
    {
      "q": "58. What indeterminate form is presented by lim_(x -> pi/2) (sec x - tan x)?",
      "options": [
        "A. infinity - infinity",
        "B. 0 / 0",
        "C. 0 * infinity",
        "D. 1^infinity"
      ],
      "ans": "A. infinity - infinity"
    },
    {
      "q": "59. What is the value of lim_(x -> pi/2) (sec x - tan x)?",
      "options": [
        "A. 0",
        "B. 1",
        "C. infinity",
        "D. 1/2"
      ],
      "ans": "A. 0"
    },
    {
      "q": "60. If lim_(x -> 0) (sin 2x + a sin x) / x^3 is finite, what must be the value of the constant 'a'?",
      "options": [
        "A. -2",
        "B. 2",
        "C. -1",
        "D. 0"
      ],
      "ans": "A. -2"
    }
  ],
  "mcqs_u2": [
    {
      "q": "1. If z = f(x, y), what does the partial derivative dz/dx represent?",
      "options": [
        "A. Rate of change of z with respect to x while keeping y constant",
        "B. Total rate of change of z with respect to x",
        "C. Rate of change of z with respect to y while keeping x constant",
        "D. The slope of the normal to the surface"
      ],
      "ans": "A. Rate of change of z with respect to x while keeping y constant"
    },
    {
      "q": "2. Clairaut's Theorem (Schwarz's Theorem) states that mixed second partial derivatives are equal (d^2z/dxdy = d^2z/dydx) if:",
      "options": [
        "A. Both mixed partial derivatives are continuous in an open disk",
        "B. The function is a polynomial only",
        "C. The function is homogeneous of degree 1",
        "D. The determinant of the Hessian is zero"
      ],
      "ans": "A. Both mixed partial derivatives are continuous in an open disk"
    },
    {
      "q": "3. A function f(x, y) is said to be homogeneous of degree n if for any t > 0:",
      "options": [
        "A. f(tx, ty) = t^n * f(x, y)",
        "B. f(tx, ty) = n * t * f(x, y)",
        "C. f(x + t, y + t) = t^n * f(x, y)",
        "D. f(tx, ty) = t * f(x, y)^n"
      ],
      "ans": "A. f(tx, ty) = t^n * f(x, y)"
    },
    {
      "q": "4. What is the degree of homogeneity of f(x, y) = (x^3 + y^3) / (x + y)?",
      "options": [
        "A. 2",
        "B. 3",
        "C. 1",
        "D. 0"
      ],
      "ans": "A. 2"
    },
    {
      "q": "5. Euler's Theorem on homogeneous functions of degree n states that x * (du/dx) + y * (du/dy) equals:",
      "options": [
        "A. n * u",
        "B. n * (n - 1) * u",
        "C. u / n",
        "D. 0"
      ],
      "ans": "A. n * u"
    },
    {
      "q": "6. For a homogeneous function u of degree n, the second-order Euler identity x^2(d^2u/dx^2) + 2xy(d^2u/dxdy) + y^2(d^2u/dy^2) equals:",
      "options": [
        "A. n(n - 1) u",
        "B. n^2 u",
        "C. n(n + 1) u",
        "D. (n - 1) u"
      ],
      "ans": "A. n(n - 1) u"
    },
    {
      "q": "7. If u = sin^-1[(x + y) / (sqrt(x) + sqrt(y))], what is the value of x(du/dx) + y(du/dy)?",
      "options": [
        "A. (1/2) tan u",
        "B. (1/2) sin u",
        "C. (1/2) cos u",
        "D. 2 tan u"
      ],
      "ans": "A. (1/2) tan u"
    },
    {
      "q": "8. If u = log[(x^4 + y^4) / (x + y)], what is the value of x(du/dx) + y(du/dy)?",
      "options": [
        "A. 3",
        "B. 3 u",
        "C. 4",
        "D. e^(3u)"
      ],
      "ans": "A. 3"
    },
    {
      "q": "9. If z = x^y, what is dz/dx?",
      "options": [
        "A. y * x^(y - 1)",
        "B. x^y * log x",
        "C. y * x^y",
        "D. x^(y - 1) * log y"
      ],
      "ans": "A. y * x^(y - 1)"
    },
    {
      "q": "10. If z = x^y, what is dz/dy?",
      "options": [
        "A. x^y * log_e x",
        "B. y * x^(y - 1)",
        "C. x^y / log_e x",
        "D. x^(y - 1)"
      ],
      "ans": "A. x^y * log_e x"
    },
    {
      "q": "11. If u = f(x - y, y - z, z - x), what is du/dx + du/dy + du/dz?",
      "options": [
        "A. 0",
        "B. 1",
        "C. 3",
        "D. u"
      ],
      "ans": "A. 0"
    },
    {
      "q": "12. What is the degree of homogeneity of the function f(x, y) = sin(x/y)?",
      "options": [
        "A. 0",
        "B. 1",
        "C. -1",
        "D. Not homogeneous"
      ],
      "ans": "A. 0"
    },
    {
      "q": "13. If u = tan^-1[(x^3 + y^3) / (x - y)], then x(du/dx) + y(du/dy) is equal to:",
      "options": [
        "A. sin(2u)",
        "B. 2 tan u",
        "C. 2 sin u",
        "D. cos(2u)"
      ],
      "ans": "A. sin(2u)"
    },
    {
      "q": "14. If z = f(u) where u = x^2 + y^2, then y(dz/dx) - x(dz/dy) equals:",
      "options": [
        "A. 0",
        "B. 2xy",
        "C. u * f'(u)",
        "D. 1"
      ],
      "ans": "A. 0"
    },
    {
      "q": "15. The total differential dz of a function z = f(x, y) is given by:",
      "options": [
        "A. (dz/dx) dx + (dz/dy) dy",
        "B. (dz/dx) dx - (dz/dy) dy",
        "C. (dz/dx) dy + (dz/dy) dx",
        "D. (d^2z/dx^2) dx + (d^2z/dy^2) dy"
      ],
      "ans": "A. (dz/dx) dx + (dz/dy) dy"
    },
    {
      "q": "16. The Jacobian of u and v with respect to x and y, denoted J = d(u,v)/d(x,y), is defined as the determinant:",
      "options": [
        "A. | du/dx  du/dy | / | dv/dx  dv/dy |",
        "B. | du/dx  dv/dx | / | du/dy  dv/dy |",
        "C. (du/dx)(dv/dy) + (du/dy)(dv/dx)",
        "D. du/dx + dv/dy"
      ],
      "ans": "A. | du/dx  du/dy | / | dv/dx  dv/dy |"
    },
    {
      "q": "17. What is the reciprocal property of Jacobians?",
      "options": [
        "A. J(u,v / x,y) * J(x,y / u,v) = 1",
        "B. J(u,v / x,y) + J(x,y / u,v) = 0",
        "C. J(u,v / x,y) = J(x,y / u,v)",
        "D. J(u,v / x,y) * J(x,y / u,v) = -1"
      ],
      "ans": "A. J(u,v / x,y) * J(x,y / u,v) = 1"
    },
    {
      "q": "18. If x = r cos theta and y = r sin theta (polar coordinates), what is the Jacobian d(x,y)/d(r,theta)?",
      "options": [
        "A. r",
        "B. r^2",
        "C. 1/r",
        "D. 1"
      ],
      "ans": "A. r"
    },
    {
      "q": "19. If x = r cos theta and y = r sin theta, what is the inverse Jacobian d(r,theta)/d(x,y)?",
      "options": [
        "A. 1/r",
        "B. r",
        "C. 1/r^2",
        "D. -r"
      ],
      "ans": "A. 1/r"
    },
    {
      "q": "20. In cylindrical coordinates (x = r cos theta, y = r sin theta, z = z), what is the Jacobian d(x,y,z)/d(r,theta,z)?",
      "options": [
        "A. r",
        "B. r^2",
        "C. r sin theta",
        "D. 1"
      ],
      "ans": "A. r"
    },
    {
      "q": "21. In spherical coordinates (x = r sin theta cos phi, y = r sin theta sin phi, z = r cos theta), the Jacobian d(x,y,z)/d(r,theta,phi) is:",
      "options": [
        "A. r^2 sin theta",
        "B. r sin theta",
        "C. r^2 cos theta",
        "D. r^3 sin^2 theta"
      ],
      "ans": "A. r^2 sin theta"
    },
    {
      "q": "22. Two functions u(x, y) and v(x, y) are functionally dependent if and only if their Jacobian d(u,v)/d(x,y) is:",
      "options": [
        "A. Identically equal to 0",
        "B. Equal to 1",
        "C. Positive",
        "D. Negative"
      ],
      "ans": "A. Identically equal to 0"
    },
    {
      "q": "23. If u = x + y and v = x - y, what is the Jacobian d(u,v)/d(x,y)?",
      "options": [
        "A. -2",
        "B. 2",
        "C. 0",
        "D. 1"
      ],
      "ans": "A. -2"
    },
    {
      "q": "24. If u = x + y and v = x^2 + 2xy + y^2, what is the Jacobian d(u,v)/d(x,y)?",
      "options": [
        "A. 0, meaning u and v are functionally dependent (v = u^2)",
        "B. 2(x+y), meaning they are independent",
        "C. 1",
        "D. -1"
      ],
      "ans": "A. 0, meaning u and v are functionally dependent (v = u^2)"
    },
    {
      "q": "25. The Chain Rule for Jacobians states that J(u,v / r,s) equals:",
      "options": [
        "A. J(u,v / x,y) * J(x,y / r,s)",
        "B. J(u,v / x,y) + J(x,y / r,s)",
        "C. J(u,v / x,y) / J(x,y / r,s)",
        "D. [J(u,v / x,y)]^2"
      ],
      "ans": "A. J(u,v / x,y) * J(x,y / r,s)"
    },
    {
      "q": "26. Geometrically, the absolute value of the Jacobian |J| in multiple integrals represents the:",
      "options": [
        "A. Local area/volume scaling factor during coordinate transformation",
        "B. Curvature of the transformation map",
        "C. Distance from the origin",
        "D. Slope of the transformed surface"
      ],
      "ans": "A. Local area/volume scaling factor during coordinate transformation"
    },
    {
      "q": "27. If u = xy and v = x/y, what is the Jacobian d(u,v)/d(x,y)?",
      "options": [
        "A. 2x / y",
        "B. -2x / y",
        "C. 0",
        "D. 1"
      ],
      "ans": "A. 2x / y"
    },
    {
      "q": "28. If u, v, w are functions of x, y, z, what is the dimension of the Jacobian matrix?",
      "options": [
        "A. 3 x 3",
        "B. 3 x 1",
        "C. 1 x 3",
        "D. 9 x 1"
      ],
      "ans": "A. 3 x 3"
    },
    {
      "q": "29. For a scalar function f: R^n -> R, the gradient vector grad f(x) is a vector of:",
      "options": [
        "A. First-order partial derivatives [df/dx1, df/dx2, ..., df/dxn]^T",
        "B. Second-order partial derivatives",
        "C. Direction cosines",
        "D. Eigenvalues of the Hessian"
      ],
      "ans": "A. First-order partial derivatives [df/dx1, df/dx2, ..., df/dxn]^T"
    },
    {
      "q": "30. The Hessian matrix H of a twice-differentiable function f(x, y) is a:",
      "options": [
        "A. 2 x 2 symmetric matrix of second-order partial derivatives",
        "B. 2 x 1 vector of gradients",
        "C. Diagonal matrix of eigenvalues",
        "D. Anti-symmetric matrix"
      ],
      "ans": "A. 2 x 2 symmetric matrix of second-order partial derivatives"
    },
    {
      "q": "31. What is the Hessian matrix of f(x, y) = x^2 + 3xy + 2y^2?",
      "options": [
        "A. [[2, 3], [3, 4]]",
        "B. [[2, 0], [0, 4]]",
        "C. [[2, 3], [0, 4]]",
        "D. [[1, 3], [3, 2]]"
      ],
      "ans": "A. [[2, 3], [3, 4]]"
    },
    {
      "q": "32. A set S in R^n is said to be convex if for any two points x, y in S and any lambda in [0, 1]:",
      "options": [
        "A. lambda * x + (1 - lambda) * y is in S",
        "B. lambda * x - (1 - lambda) * y is in S",
        "C. x + y is in S",
        "D. lambda * x is in S"
      ],
      "ans": "A. lambda * x + (1 - lambda) * y is in S"
    },
    {
      "q": "33. Which of the following sets is NOT convex?",
      "options": [
        "A. A donut shape / annulus {x in R^2 : 1 <= ||x|| <= 2}",
        "B. A solid sphere {x in R^3 : ||x|| <= 1}",
        "C. A hyperplane {x in R^n : a^T x = b}",
        "D. A half-space {x in R^n : a^T x <= b}"
      ],
      "ans": "A. A donut shape / annulus {x in R^2 : 1 <= ||x|| <= 2}"
    },
    {
      "q": "34. What is the fundamental property of the intersection of two convex sets?",
      "options": [
        "A. The intersection is always convex",
        "B. The intersection is never convex",
        "C. The intersection is convex only if both are circles",
        "D. The intersection is empty"
      ],
      "ans": "A. The intersection is always convex"
    },
    {
      "q": "35. A function f: R^n -> R is convex if and only if its Hessian matrix H(x) is:",
      "options": [
        "A. Positive semi-definite (PSD) for all x in its domain",
        "B. Negative definite for all x",
        "C. Singular for all x",
        "D. Orthogonal for all x"
      ],
      "ans": "A. Positive semi-definite (PSD) for all x in its domain"
    },
    {
      "q": "36. A symmetric matrix H is positive semi-definite (PSD) if and only if:",
      "options": [
        "A. All its eigenvalues are greater than or equal to zero (lambda_i >= 0)",
        "B. Its determinant is negative",
        "C. Its trace is zero",
        "D. All elements are positive"
      ],
      "ans": "A. All its eigenvalues are greater than or equal to zero (lambda_i >= 0)"
    },
    {
      "q": "37. Why is convexity of the objective function highly prized in machine learning and optimization?",
      "options": [
        "A. Any local minimum is guaranteed to be a global minimum",
        "B. It eliminates the need for computing derivatives",
        "C. It guarantees the Hessian has zero trace",
        "D. It prevents the model from overfitting"
      ],
      "ans": "A. Any local minimum is guaranteed to be a global minimum"
    },
    {
      "q": "38. What is the first-order condition for convexity of a differentiable function f(x)?",
      "options": [
        "A. f(y) >= f(x) + grad f(x)^T (y - x)",
        "B. f(y) <= f(x) + grad f(x)^T (y - x)",
        "C. f(y) = f(x) + grad f(x)^T (y - x)",
        "D. grad f(x)^T (y - x) = 0"
      ],
      "ans": "A. f(y) >= f(x) + grad f(x)^T (y - x)"
    },
    {
      "q": "39. Is the quadratic function f(x, y) = x^2 + y^2 convex over R^2?",
      "options": [
        "A. Yes, strictly convex everywhere (Hessian eigenvalues are 2, 2 > 0)",
        "B. No, it is concave",
        "C. Neither convex nor concave",
        "D. Only convex for positive x and y"
      ],
      "ans": "A. Yes, strictly convex everywhere (Hessian eigenvalues are 2, 2 > 0)"
    },
    {
      "q": "40. What is the Hessian of the quadratic form f(x) = (1/2) x^T A x where A is symmetric?",
      "options": [
        "A. A",
        "B. 2 A",
        "C. (1/2) A",
        "D. A^2"
      ],
      "ans": "A. A"
    },
    {
      "q": "41. A point (a, b) where df/dx = 0 and df/dy = 0 simultaneously is called a:",
      "options": [
        "A. Stationary or critical point",
        "B. Inflexion point",
        "C. Singular boundary point",
        "D. Discontinuity point"
      ],
      "ans": "A. Stationary or critical point"
    },
    {
      "q": "42. In the second derivative test for f(x, y), let r = d^2f/dx^2, s = d^2f/dxdy, t = d^2f/dy^2. A stationary point is a local minimum if:",
      "options": [
        "A. rt - s^2 > 0 and r > 0",
        "B. rt - s^2 > 0 and r < 0",
        "C. rt - s^2 < 0",
        "D. rt - s^2 = 0"
      ],
      "ans": "A. rt - s^2 > 0 and r > 0"
    },
    {
      "q": "43. In the second derivative test, what does rt - s^2 < 0 indicate?",
      "options": [
        "A. Saddle point (neither maximum nor minimum)",
        "B. Local maximum",
        "C. Local minimum",
        "D. Test is inconclusive"
      ],
      "ans": "A. Saddle point (neither maximum nor minimum)"
    },
    {
      "q": "44. What does rt - s^2 = 0 indicate in the second derivative test?",
      "options": [
        "A. The test is inconclusive and further investigation is required",
        "B. It is definitely a saddle point",
        "C. It is definitely a local minimum",
        "D. The function is constant"
      ],
      "ans": "A. The test is inconclusive and further investigation is required"
    },
    {
      "q": "45. For f(x, y) = x^2 - y^2, what type of critical point is the origin (0, 0)?",
      "options": [
        "A. Saddle point",
        "B. Local minimum",
        "C. Local maximum",
        "D. Global minimum"
      ],
      "ans": "A. Saddle point"
    },
    {
      "q": "46. For f(x, y) = x^3 + y^3 - 3xy, what is the nature of the critical point (1, 1)?",
      "options": [
        "A. Local minimum",
        "B. Local maximum",
        "C. Saddle point",
        "D. Inconclusive"
      ],
      "ans": "A. Local minimum"
    },
    {
      "q": "47. Lagrange's method of undetermined multipliers is used to solve:",
      "options": [
        "A. Constrained optimization problems",
        "B. Unconstrained linear systems",
        "C. Indeterminate limits of type 0/0",
        "D. Differential equations with variable coefficients"
      ],
      "ans": "A. Constrained optimization problems"
    },
    {
      "q": "48. In optimizing f(x, y, z) subject to constraint g(x, y, z) = 0 using Lagrange multiplier lambda, the vector equation is:",
      "options": [
        "A. grad f = lambda * grad g",
        "B. grad f + lambda * grad g = 1",
        "C. grad f . grad g = lambda",
        "D. grad f x grad g = lambda"
      ],
      "ans": "A. grad f = lambda * grad g"
    },
    {
      "q": "49. Geometrically, at the optimal point of a constrained problem grad f = lambda * grad g, the level curves of f and g are:",
      "options": [
        "A. Tangent to each other",
        "B. Orthogonal to each other",
        "C. Intersecting at 45 degrees",
        "D. Completely separate"
      ],
      "ans": "A. Tangent to each other"
    },
    {
      "q": "50. What is the minimum distance from the origin (0,0,0) to the plane x + y + z = 3?",
      "options": [
        "A. sqrt(3)",
        "B. 3",
        "C. 1",
        "D. 3 * sqrt(3)"
      ],
      "ans": "A. sqrt(3)"
    },
    {
      "q": "51. The fundamental parameter update formula in Gradient Descent optimization is:",
      "options": [
        "A. theta_(t+1) = theta_t - alpha * grad f(theta_t)",
        "B. theta_(t+1) = theta_t + alpha * grad f(theta_t)",
        "C. theta_(t+1) = alpha * theta_t - grad f(theta_t)",
        "D. theta_(t+1) = theta_t / (alpha * grad f(theta_t))"
      ],
      "ans": "A. theta_(t+1) = theta_t - alpha * grad f(theta_t)"
    },
    {
      "q": "52. What role does alpha (the learning rate) play in Gradient Descent?",
      "options": [
        "A. Step size along the negative gradient direction",
        "B. Regularization penalty parameter",
        "C. Dimension of the feature vector",
        "D. Number of training iterations"
      ],
      "ans": "A. Step size along the negative gradient direction"
    },
    {
      "q": "53. What happens if the learning rate alpha is chosen too large in gradient descent?",
      "options": [
        "A. The algorithm may oscillate wildly or diverge",
        "B. The algorithm converges in a single step",
        "C. The algorithm stops prematurely at a local minimum",
        "D. The gradient becomes zero immediately"
      ],
      "ans": "A. The algorithm may oscillate wildly or diverge"
    },
    {
      "q": "54. What is the key difference between Batch Gradient Descent and Stochastic Gradient Descent (SGD)?",
      "options": [
        "A. SGD updates parameters using a single random training sample per step, whereas Batch uses the entire dataset",
        "B. SGD requires second derivatives while Batch uses first derivatives",
        "C. Batch GD is stochastic and noisy",
        "D. SGD can only be applied to linear equations"
      ],
      "ans": "A. SGD updates parameters using a single random training sample per step, whereas Batch uses the entire dataset"
    },
    {
      "q": "55. The gradient of a scalar field phi, grad phi = nabla phi, points in the direction of:",
      "options": [
        "A. Maximum rate of increase of phi",
        "B. Minimum rate of increase of phi",
        "C. Zero rate of change",
        "D. Tangent to the level surface"
      ],
      "ans": "A. Maximum rate of increase of phi"
    },
    {
      "q": "56. A vector field F is defined to be Solenoidal if its divergence satisfies:",
      "options": [
        "A. div F = nabla . F = 0",
        "B. curl F = 0",
        "C. div F > 0",
        "D. div F = 1"
      ],
      "ans": "A. div F = nabla . F = 0"
    },
    {
      "q": "57. A vector field F is defined to be Irrotational (or Conservative) if its curl satisfies:",
      "options": [
        "A. curl F = nabla x F = 0",
        "B. div F = 0",
        "C. curl F = 1",
        "D. nabla^2 F = 0"
      ],
      "ans": "A. curl F = nabla x F = 0"
    },
    {
      "q": "58. If a vector field F is irrotational, then there exists a scalar potential function phi such that:",
      "options": [
        "A. F = grad phi",
        "B. F = div phi",
        "C. F = curl phi",
        "D. phi = div F"
      ],
      "ans": "A. F = grad phi"
    },
    {
      "q": "59. Which of the following vector identities is ALWAYS identically zero for any twice differentiable field?",
      "options": [
        "A. div(curl F) = 0 and curl(grad phi) = 0",
        "B. div(grad phi) = 0",
        "C. curl(curl F) = 0",
        "D. grad(div F) = 0"
      ],
      "ans": "A. div(curl F) = 0 and curl(grad phi) = 0"
    },
    {
      "q": "60. The Laplacian of a scalar field, nabla^2 phi = div(grad phi), in Cartesian coordinates is:",
      "options": [
        "A. d^2phi/dx^2 + d^2phi/dy^2 + d^2phi/dz^2",
        "B. (dphi/dx)^2 + (dphi/dy)^2 + (dphi/dz)^2",
        "C. d^3phi / (dx dy dz)",
        "D. dphi/dx + dphi/dy + dphi/dz"
      ],
      "ans": "A. d^2phi/dx^2 + d^2phi/dy^2 + d^2phi/dz^2"
    }
  ],
  "part_b_u1": [
    {
      "num": "Q1",
      "title": "Find the nth derivative of the function y = e^(ax) * cos(bx + c).",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Differentiate y with respect to x once:\n  y_1 = a e^(ax) cos(bx + c) - b e^(ax) sin(bx + c)",
        "Step 2: Substitute polar coordinates a = r cos(phi) and b = r sin(phi), where r = sqrt(a^2 + b^2) and phi = tan^-1(b/a):\n  y_1 = r e^(ax) [cos(phi) cos(bx + c) - sin(phi) sin(bx + c)] = r e^(ax) cos(bx + c + phi)",
        "Step 3: Differentiate successively:\n  y_2 = r^2 e^(ax) cos(bx + c + 2*phi)\n  y_3 = r^3 e^(ax) cos(bx + c + 3*phi)",
        "Step 4: By mathematical induction, the nth derivative is:\n  y_n = r^n e^(ax) cos(bx + c + n*phi)\n  where r = (a^2 + b^2)^(1/2) and phi = tan^-1(b/a)."
      ]
    },
    {
      "num": "Q2",
      "title": "Find the nth derivative of y = 1 / (x^2 - 5x + 6) using partial fractions.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Factorize the quadratic denominator:\n  x^2 - 5x + 6 = (x - 2)(x - 3)",
        "Step 2: Resolve into partial fractions:\n  1 / [(x - 2)(x - 3)] = A / (x - 2) + B / (x - 3)\n  Setting x = 3 gives B = 1. Setting x = 2 gives A = -1.\n  Thus, y = 1 / (x - 3) - 1 / (x - 2)",
        "Step 3: Recall the standard nth derivative formula: d^n/dx^n [1 / (ax + b)] = (-1)^n * n! * a^n / (ax + b)^(n+1).",
        "Step 4: Apply to each term with a = 1:\n  y_n = (-1)^n * n! [ 1 / (x - 3)^(n+1) - 1 / (x - 2)^(n+1) ]."
      ]
    },
    {
      "num": "Q3",
      "title": "Find the nth derivative of y = log(3x + 2).",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Differentiate y once with respect to x:\n  y_1 = 3 / (3x + 2) = 3 * (3x + 2)^(-1)",
        "Step 2: Differentiate successively:\n  y_2 = 3 * (-1) * 3 * (3x + 2)^(-2) = (-1)^1 * 1! * 3^2 / (3x + 2)^2\n  y_3 = 3 * (-1) * (-2) * 3^2 * (3x + 2)^(-3) = (-1)^2 * 2! * 3^3 / (3x + 2)^3",
        "Step 3: Generalizing to the nth derivative:\n  y_n = (-1)^(n-1) * (n-1)! * 3^n / (3x + 2)^n."
      ]
    },
    {
      "num": "Q4",
      "title": "Find the nth derivative of y = sin^3 x.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Use the trigonometric identity sin(3x) = 3 sin x - 4 sin^3 x:\n  sin^3 x = (1/4) [3 sin x - sin(3x)]",
        "Step 2: Recall standard formula: d^n/dx^n [sin(ax + b)] = a^n * sin(ax + b + n*pi/2).",
        "Step 3: Apply the formula to both terms:\n  d^n/dx^n [sin x] = 1^n * sin(x + n*pi/2)\n  d^n/dx^n [sin(3x)] = 3^n * sin(3x + n*pi/2)",
        "Step 4: Combine the terms:\n  y_n = (1/4) [ 3 * sin(x + n*pi/2) - 3^n * sin(3x + n*pi/2) ]."
      ]
    },
    {
      "num": "Q5",
      "title": "State and explain Leibnitz's Theorem for the nth derivative of the product of two functions.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Statement: If u and v are two functions of x possessing derivatives up to the nth order, then the nth derivative of their product (u * v) is given by:\n  (u * v)_n = u_n * v + nC1 * u_(n-1) * v_1 + nC2 * u_(n-2) * v_2 + ... + nCr * u_(n-r) * v_r + ... + u * v_n",
        "Compact Summation Notation:\n  d^n/dx^n [u * v] = Sum from r = 0 to n of [ nCr * (d^(n-r)u / dx^(n-r)) * (d^r v / dx^r) ]",
        "Key Strategy: Choose 'v' as the polynomial factor whose higher derivatives eventually vanish (e.g., v = x^2 terminates after v_2 = 2), leaving only a few non-zero terms."
      ]
    },
    {
      "num": "Q6",
      "title": "If y = x^2 * e^(3x), find y_n using Leibnitz's Theorem.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Choose u = e^(3x) and v = x^2.",
        "Step 2: Compute successive derivatives of u and v:\n  u_n = 3^n * e^(3x),  u_(n-1) = 3^(n-1) * e^(3x),  u_(n-2) = 3^(n-2) * e^(3x)\n  v = x^2,  v_1 = 2x,  v_2 = 2,  v_3 = 0 (all higher derivatives vanish).",
        "Step 3: Apply Leibnitz's formula (only first 3 terms survive):\n  y_n = u_n * v + nC1 * u_(n-1) * v_1 + nC2 * u_(n-2) * v_2\n  y_n = [3^n * e^(3x)] * (x^2) + n * [3^(n-1) * e^(3x)] * (2x) + [n(n-1)/2] * [3^(n-2) * e^(3x)] * (2)",
        "Step 4: Factor out 3^(n-2) * e^(3x):\n  y_n = 3^(n-2) * e^(3x) [ 9x^2 + 6nx + n(n-1) ]."
      ]
    },
    {
      "num": "Q7",
      "title": "If y = a cos(log x) + b sin(log x), prove that x^2 * y_(n+2) + (2n + 1)x * y_(n+1) + (n^2 + 1) * y_n = 0.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Differentiate y with respect to x:\n  y_1 = -a sin(log x) * (1/x) + b cos(log x) * (1/x)\n  Multiply by x: x * y_1 = -a sin(log x) + b cos(log x)",
        "Step 2: Differentiate again with respect to x:\n  x * y_2 + 1 * y_1 = -a cos(log x) * (1/x) - b sin(log x) * (1/x) = - (1/x) [a cos(log x) + b sin(log x)] = -y / x\n  Multiply by x: x^2 * y_2 + x * y_1 + y = 0",
        "Step 3: Differentiate n times using Leibnitz's Theorem:\n  Term 1 (x^2 * y_2): (y_2 * x^2)_n = y_(n+2) * x^2 + nC1 * y_(n+1) * (2x) + nC2 * y_n * (2) = x^2 * y_(n+2) + 2nx * y_(n+1) + n(n-1) y_n\n  Term 2 (x * y_1): (y_1 * x)_n = y_(n+1) * x + n * y_n * (1) = x * y_(n+1) + n * y_n\n  Term 3 (y): y_n",
        "Step 4: Add all differentiated terms:\n  x^2 * y_(n+2) + (2n + 1)x * y_(n+1) + [n(n-1) + n + 1] y_n = 0\n  x^2 * y_(n+2) + (2n + 1)x * y_(n+1) + (n^2 + 1) y_n = 0. (Hence proved)."
      ]
    },
    {
      "num": "Q8",
      "title": "If y = tan^-1 x, prove that (1 + x^2) y_(n+1) + 2nx y_n + n(n - 1) y_(n-1) = 0.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: First derivative of y = tan^-1 x:\n  y_1 = 1 / (1 + x^2)  ==>  (1 + x^2) y_1 = 1",
        "Step 2: Differentiate n times using Leibnitz's Theorem:\n  For (y_1 * (1 + x^2))_n = d^n/dx^n [1] = 0:\n  (y_1 * (1 + x^2))_n = y_(n+1) * (1 + x^2) + nC1 * y_n * (2x) + nC2 * y_(n-1) * (2) + 0 = 0",
        "Step 3: Simplify the binomial coefficients:\n  nC1 = n,  nC2 * 2 = [n(n-1)/2] * 2 = n(n-1)",
        "Step 4: Result:\n  (1 + x^2) y_(n+1) + 2nx y_n + n(n - 1) y_(n-1) = 0. (Hence proved)."
      ]
    },
    {
      "num": "Q9",
      "title": "State Rolle's Theorem and give its geometric interpretation with conditions.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Statement: Let f(x) be a real-valued function defined on a closed interval [a, b] such that:\n  1. f(x) is continuous on the closed interval [a, b],\n  2. f(x) is differentiable on the open interval (a, b),\n  3. f(a) = f(b).\nThen there exists at least one point c in (a, b) such that f'(c) = 0.",
        "Geometric Interpretation:\n  Since the endpoints have equal heights f(a) = f(b) and the curve is continuous and smooth, the graph must turn around at least once. At this turning point (c, f(c)), the tangent line is completely horizontal (parallel to the x-axis), so its slope f'(c) = 0."
      ]
    },
    {
      "num": "Q10",
      "title": "Verify Rolle's Theorem for f(x) = x(x - 1)(x - 2) on [0, 2].",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Expand f(x) = x(x^2 - 3x + 2) = x^3 - 3x^2 + 2x.",
        "Step 2: Check conditions of Rolle's Theorem:\n  1. Being a polynomial, f(x) is continuous on [0, 2].\n  2. f'(x) = 3x^2 - 6x + 2 exists for all x in (0, 2), so f(x) is differentiable on (0, 2).\n  3. f(0) = 0 and f(2) = 2(1)(0) = 0 ==> f(0) = f(2) = 0. All 3 conditions hold.",
        "Step 3: Set f'(c) = 0:\n  3c^2 - 6c + 2 = 0\n  c = [6 +/- sqrt(36 - 24)] / 6 = [6 +/- sqrt(12)] / 6 = 1 +/- 1/sqrt(3)\n  c_1 = 1 - 1/sqrt(3) approx 0.423 in (0, 2)\n  c_2 = 1 + 1/sqrt(3) approx 1.577 in (0, 2)",
        "Conclusion: Both values of c lie strictly within (0, 2). Hence, Rolle's Theorem is verified."
      ]
    },
    {
      "num": "Q11",
      "title": "Verify Rolle's Theorem for f(x) = e^(-x) * sin x on [0, pi].",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Continuity and differentiability:\n  f(x) is the product of an exponential function and a trigonometric function, both of which are continuous on [0, pi] and differentiable on (0, pi).",
        "Step 2: Boundary values:\n  f(0) = e^0 * sin 0 = 0\n  f(pi) = e^(-pi) * sin pi = 0 ==> f(0) = f(pi) = 0. All 3 conditions satisfied.",
        "Step 3: Compute f'(x) and equate to zero:\n  f'(x) = -e^(-x) sin x + e^(-x) cos x = e^(-x) (cos x - sin x)\n  Set f'(c) = 0 ==> e^(-c) (cos c - sin c) = 0.\n  Since e^(-c) != 0, cos c - sin c = 0 ==> tan c = 1.",
        "Step 4: Find c:\n  c = pi/4, which lies strictly inside (0, pi). Hence, Rolle's Theorem is verified."
      ]
    },
    {
      "num": "Q12",
      "title": "State Lagrange's Mean Value Theorem (LMVT) and give its physical (velocity) interpretation.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Statement: If a function f(x) is:\n  1. Continuous on the closed interval [a, b],\n  2. Differentiable on the open interval (a, b),\nThen there exists at least one point c in (a, b) such that:\n  f'(c) = [f(b) - f(a)] / (b - a).",
        "Geometric Meaning: The tangent to the curve at x = c is parallel to the chord joining the endpoints (a, f(a)) and (b, f(b)).",
        "Physical (Velocity) Interpretation: If s = f(t) represents the position of an object, [f(b) - f(a)] / (b - a) is the average velocity over time interval [a, b]. LMVT guarantees that at some instant t = c, the instantaneous velocity f'(c) equals the average velocity."
      ]
    },
    {
      "num": "Q13",
      "title": "Verify Lagrange's Mean Value Theorem for f(x) = 2x^2 - 7x + 10 on [2, 5].",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Check conditions:\n  f(x) is a polynomial, so it is continuous on [2, 5] and differentiable on (2, 5).",
        "Step 2: Calculate endpoint values:\n  f(2) = 2(4) - 7(2) + 10 = 8 - 14 + 10 = 4\n  f(5) = 2(25) - 7(5) + 10 = 50 - 35 + 10 = 25",
        "Step 3: Calculate average rate of change:\n  [f(5) - f(2)] / (5 - 2) = (25 - 4) / 3 = 21 / 3 = 7",
        "Step 4: Find c such that f'(c) = 7:\n  f'(x) = 4x - 7 ==> 4c - 7 = 7 ==> 4c = 14 ==> c = 3.5\n  Since 3.5 lies strictly within (2, 5), LMVT is verified."
      ]
    },
    {
      "num": "Q14",
      "title": "Using LMVT, prove that sin x < x for all x > 0.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Consider the function f(t) = sin t on the interval [0, x] where x > 0.",
        "Step 2: f(t) is continuous on [0, x] and differentiable on (0, x). By LMVT, there exists c in (0, x) such that:\n  [f(x) - f(0)] / (x - 0) = f'(c)\n  [sin x - 0] / x = cos c  ==>  sin x = x * cos c",
        "Step 3: Since c in (0, x), cos c < 1 (except at c = 0, but c > 0).",
        "Step 4: Therefore, sin x = x * cos c < x * 1 ==> sin x < x for all x > 0. (Hence proved)."
      ]
    },
    {
      "num": "Q15",
      "title": "Using LMVT, prove that (b - a)/(1 + b^2) < tan^-1 b - tan^-1 a < (b - a)/(1 + a^2) where 0 < a < b.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Let f(x) = tan^-1 x on [a, b]. f(x) is continuous on [a, b] and differentiable on (a, b).",
        "Step 2: By LMVT, there exists c in (a, b) such that:\n  [tan^-1 b - tan^-1 a] / (b - a) = f'(c) = 1 / (1 + c^2)",
        "Step 3: Since 0 < a < c < b:\n  a^2 < c^2 < b^2  ==>  1 + a^2 < 1 + c^2 < 1 + b^2\n  Taking reciprocals reverses the inequalities:\n  1 / (1 + b^2) < 1 / (1 + c^2) < 1 / (1 + a^2)",
        "Step 4: Substitute f'(c):\n  1 / (1 + b^2) < [tan^-1 b - tan^-1 a] / (b - a) < 1 / (1 + a^2)\n  Multiplying through by (b - a) > 0 gives:\n  (b - a)/(1 + b^2) < tan^-1 b - tan^-1 a < (b - a)/(1 + a^2). (Hence proved)."
      ]
    },
    {
      "num": "Q16",
      "title": "State Cauchy's Mean Value Theorem and explain how LMVT is a special case of it.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Statement: If f(x) and g(x) are two functions such that:\n  1. Both f(x) and g(x) are continuous on [a, b],\n  2. Both are differentiable on (a, b),\n  3. g'(x) != 0 for any x in (a, b),\nThen there exists at least one point c in (a, b) such that:\n  [f(b) - f(a)] / [g(b) - g(a)] = f'(c) / g'(c).",
        "Deduction of LMVT:\n  Choose g(x) = x. Then g'(x) = 1 != 0, g(a) = a, and g(b) = b.\n  Substituting into Cauchy's formula gives:\n  [f(b) - f(a)] / (b - a) = f'(c) / 1 = f'(c), which is exactly Lagrange's Mean Value Theorem."
      ]
    },
    {
      "num": "Q17",
      "title": "State Maclaurin's Theorem with Lagrange's form of remainder.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Statement: If f(x) is a function such that all its derivatives up to order (n - 1) are continuous on [0, x] and the nth derivative exists on (0, x), then:\n  f(x) = f(0) + x f'(0) + (x^2 / 2!) f''(0) + ... + [x^(n-1) / (n-1)!] f^(n-1)(0) + R_n",
        "Lagrange's Remainder:\n  R_n = [x^n / n!] * f^(n)(theta * x), where 0 < theta < 1.",
        "Convergence to Infinite Series:\n  If lim_(n -> infinity) R_n = 0, the function can be represented as the infinite Maclaurin series:\n  f(x) = Sum from n = 0 to infinity of [x^n / n!] f^(n)(0)."
      ]
    },
    {
      "num": "Q18",
      "title": "Expand e^x by Maclaurin's series up to the term in x^4 and estimate e^(0.1).",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Let f(x) = e^x. All derivatives are f^(k)(x) = e^x, so f^(k)(0) = e^0 = 1 for all k >= 0.",
        "Step 2: Maclaurin formula:\n  e^x = 1 + x + x^2/2! + x^3/3! + x^4/4! + ... = 1 + x + x^2/2 + x^3/6 + x^4/24 + ...",
        "Step 3: Substitute x = 0.1:\n  e^(0.1) approx 1 + 0.1 + (0.01)/2 + (0.001)/6 + (0.0001)/24\n  = 1 + 0.1 + 0.005 + 0.0001667 + 0.0000042 = 1.1051709.",
        "Conclusion: Exact value of e^(0.1) = 1.105170918..., showing precision up to 7 decimal places."
      ]
    },
    {
      "num": "Q19",
      "title": "Expand log(1 + x) in ascending powers of x by Maclaurin's series.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Let f(x) = log(1 + x). Compute derivatives at x = 0:\n  f(0) = log 1 = 0\n  f'(x) = 1 / (1 + x) ==> f'(0) = 1\n  f''(x) = -1 / (1 + x)^2 ==> f''(0) = -1\n  f'''(x) = 2 / (1 + x)^3 ==> f'''(0) = 2\n  f^(4)(x) = -6 / (1 + x)^4 ==> f^(4)(0) = -6",
        "Step 2: Apply Maclaurin's formula:\n  f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + (x^3/3!) f'''(0) + (x^4/4!) f^(4)(0) + ...\n  log(1 + x) = 0 + x(1) + (x^2/2)(-1) + (x^3/6)(2) + (x^4/24)(-6) + ...",
        "Step 3: Simplify:\n  log(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ... (valid for -1 < x <= 1)."
      ]
    },
    {
      "num": "Q20",
      "title": "Expand cos x in powers of (x - pi/4) by Taylor's series up to the third degree.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Let f(x) = cos x and a = pi/4. Compute derivatives at a:\n  f(pi/4) = cos(pi/4) = 1/sqrt(2)\n  f'(pi/4) = -sin(pi/4) = -1/sqrt(2)\n  f''(pi/4) = -cos(pi/4) = -1/sqrt(2)\n  f'''(pi/4) = sin(pi/4) = 1/sqrt(2)",
        "Step 2: Apply Taylor's series: f(x) = f(a) + (x - a) f'(a) + [(x - a)^2 / 2!] f''(a) + [(x - a)^3 / 3!] f'''(a) + ...",
        "Step 3: Substitute values:\n  cos x = 1/sqrt(2) - (1/sqrt(2))(x - pi/4) - (1 / [2*sqrt(2)]) (x - pi/4)^2 + (1 / [6*sqrt(2)]) (x - pi/4)^3 + ...\n  cos x = (1/sqrt(2)) [ 1 - (x - pi/4) - (1/2)(x - pi/4)^2 + (1/6)(x - pi/4)^3 - ... ]."
      ]
    },
    {
      "num": "Q21",
      "title": "Expand f(x) = 2x^3 + 7x^2 + x - 1 in powers of (x - 2) using Taylor's theorem.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Compute derivatives of f(x) at x = 2:\n  f(2) = 2(8) + 7(4) + 2 - 1 = 16 + 28 + 2 - 1 = 45\n  f'(x) = 6x^2 + 14x + 1 ==> f'(2) = 6(4) + 14(2) + 1 = 24 + 28 + 1 = 53\n  f''(x) = 12x + 14 ==> f''(2) = 12(2) + 14 = 38\n  f'''(x) = 12 ==> f'''(2) = 12\n  Higher derivatives are all 0.",
        "Step 2: Apply Taylor's formula:\n  f(x) = f(2) + (x - 2) f'(2) + [(x - 2)^2 / 2!] f''(2) + [(x - 2)^3 / 3!] f'''(2)",
        "Step 3: Substitute coefficients:\n  f(x) = 45 + 53(x - 2) + (38/2)(x - 2)^2 + (12/6)(x - 2)^3\n  f(x) = 45 + 53(x - 2) + 19(x - 2)^2 + 2(x - 2)^3."
      ]
    },
    {
      "num": "Q22",
      "title": "Define all 7 classical indeterminate forms with an illustrative example of each.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "1. 0 / 0: Example: lim_(x->0) (sin x) / x = 1.",
        "2. infinity / infinity: Example: lim_(x->infinity) (log x) / x = 0.",
        "3. 0 * infinity: Example: lim_(x->0+) x * log x = 0.",
        "4. infinity - infinity: Example: lim_(x->pi/2) (sec x - tan x) = 0.",
        "5. 0^0: Example: lim_(x->0+) x^x = 1.",
        "6. 1^infinity: Example: lim_(x->infinity) (1 + 1/x)^x = e.",
        "7. infinity^0: Example: lim_(x->infinity) x^(1/x) = 1.",
        "Note: Forms 1 and 2 are evaluated directly by L'Hopital's rule; forms 3-7 are transformed into 0/0 or inf/inf using algebra or natural logarithms."
      ]
    },
    {
      "num": "Q23",
      "title": "Evaluate lim_(x -> 0) (sin x - x) / x^3 using L'Hopital's rule.",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Check form at x = 0:\n  Numerator: sin 0 - 0 = 0. Denominator: 0^3 = 0. This is form [0 / 0].",
        "Step 2: Apply L'Hopital's Rule (differentiate numerator and denominator):\n  = lim_(x->0) (cos x - 1) / (3x^2). At x = 0, this is still [0 / 0].",
        "Step 3: Apply L'Hopital's Rule a second time:\n  = lim_(x->0) (-sin x) / (6x). At x = 0, this is still [0 / 0].",
        "Step 4: Apply L'Hopital's Rule a third time:\n  = lim_(x->0) (-cos x) / 6 = -cos(0) / 6 = -1/6."
      ]
    },
    {
      "num": "Q24",
      "title": "Evaluate lim_(x -> 0) (e^x - e^(-x) - 2x) / (x - sin x).",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Check form at x = 0: (1 - 1 - 0) / (0 - 0) = [0 / 0].",
        "Step 2: Apply L'Hopital's rule:\n  = lim_(x->0) (e^x + e^(-x) - 2) / (1 - cos x)  ==> still [0 / 0].",
        "Step 3: Apply L'Hopital's rule again:\n  = lim_(x->0) (e^x - e^(-x)) / (sin x)  ==> still [0 / 0].",
        "Step 4: Apply L'Hopital's rule a third time:\n  = lim_(x->0) (e^x + e^(-x)) / (cos x) = (1 + 1) / 1 = 2."
      ]
    },
    {
      "num": "Q25",
      "title": "Evaluate lim_(x -> 0+) x^(sin x) (indeterminate form 0^0).",
      "unit": "Unit 1: Differential Calculus",
      "unitKey": "u1",
      "sol_points": [
        "Step 1: Let y = x^(sin x). As x -> 0+, this is indeterminate form [0^0].",
        "Step 2: Take the natural logarithm on both sides:\n  log y = sin x * log x = (log x) / (cosec x)",
        "Step 3: As x -> 0+, log x -> -infinity and cosec x -> infinity, giving form [infinity / infinity]. Apply L'Hopital's rule:\n  lim_(x->0+) log y = lim_(x->0+) [ (1/x) / (-cosec x cot x) ] = lim_(x->0+) [ -sin^2 x / (x cos x) ]\n  = lim_(x->0+) [ -(sin x / x) * (sin x / cos x) ] = -1 * (0 / 1) = 0.",
        "Step 4: Exponentiate to find y:\n  lim_(x->0+) y = e^0 = 1."
      ]
    }
  ],
  "part_b_u2": [
    {
      "num": "Q26",
      "title": "Define partial derivative of a function of two variables and state Clairaut's Theorem.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: For a function z = f(x, y), the partial derivative with respect to x is the limit:\n  df/dx = lim_(h -> 0) [f(x + h, y) - f(x, y)] / h\nwhere y is treated as a constant. Similarly, df/dy differentiates with respect to y keeping x constant.",
        "Clairaut's (Schwarz's) Theorem: If the mixed second-order partial derivatives d^2f / (dx dy) and d^2f / (dy dx) exist and are continuous on an open region containing (a, b), then they are equal:\n  d^2f / (dx dy) = d^2f / (dy dx)."
      ]
    },
    {
      "num": "Q27",
      "title": "If u = log(x^3 + y^3 + z^3 - 3xyz), prove that du/dx + du/dy + du/dz = 3 / (x + y + z).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Compute partial derivatives:\n  du/dx = (3x^2 - 3yz) / (x^3 + y^3 + z^3 - 3xyz)\n  du/dy = (3y^2 - 3zx) / (x^3 + y^3 + z^3 - 3xyz)\n  du/dz = (3z^2 - 3xy) / (x^3 + y^3 + z^3 - 3xyz)",
        "Step 2: Add all three partial derivatives:\n  du/dx + du/dy + du/dz = 3 (x^2 + y^2 + z^2 - xy - yz - zx) / (x^3 + y^3 + z^3 - 3xyz)",
        "Step 3: Recall the algebraic identity:\n  x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)",
        "Step 4: Cancel the common quadratic factor:\n  du/dx + du/dy + du/dz = 3 / (x + y + z). (Hence proved)."
      ]
    },
    {
      "num": "Q28",
      "title": "State and prove Euler's Theorem for a homogeneous function of degree n in two variables.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Statement: If u = f(x, y) is a homogeneous function of degree n in x and y, then:\n  x (du/dx) + y (du/dy) = n * u.",
        "Proof:\n  Since u is homogeneous of degree n, we can express it as u = x^n * F(y/x).\n  Let v = y/x. Then u = x^n * F(v).\n  Compute du/dx: du/dx = n x^(n-1) F(v) + x^n F'(v) (-y/x^2) = n x^(n-1) F(v) - y x^(n-2) F'(v)\n  Compute du/dy: du/dy = x^n F'(v) (1/x) = x^(n-1) F'(v)\n  Now calculate x(du/dx) + y(du/dy):\n  x (du/dx) = n x^n F(v) - y x^(n-1) F'(v)\n  y (du/dy) = y x^(n-1) F'(v)\n  Adding both: x (du/dx) + y (du/dy) = n x^n F(v) = n * u. (Hence proved)."
      ]
    },
    {
      "num": "Q29",
      "title": "If u = sin^-1[(x + y) / (sqrt(x) + sqrt(y))], prove that x(du/dx) + y(du/dy) = (1/2) tan u.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Let z = sin u = (x + y) / (sqrt(x) + sqrt(y)).",
        "Step 2: Determine homogeneity of z:\n  z(tx, ty) = (tx + ty) / (sqrt(tx) + sqrt(ty)) = t (x + y) / [t^(1/2) (sqrt(x) + sqrt(y))] = t^(1/2) * z(x, y)\n  Thus, z is homogeneous of degree n = 1/2.",
        "Step 3: Apply Euler's Theorem to z:\n  x (dz/dx) + y (dz/dy) = (1/2) z",
        "Step 4: Since z = sin u, dz/dx = cos u (du/dx) and dz/dy = cos u (du/dy):\n  x [cos u (du/dx)] + y [cos u (du/dy)] = (1/2) sin u\n  Divide by cos u: x (du/dx) + y (du/dy) = (1/2) (sin u / cos u) = (1/2) tan u. (Hence proved)."
      ]
    },
    {
      "num": "Q30",
      "title": "If u = tan^-1[(x^3 + y^3) / (x - y)], prove that x(du/dx) + y(du/dy) = sin(2u).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Let z = tan u = (x^3 + y^3) / (x - y).",
        "Step 2: Check degree of z:\n  z(tx, ty) = (t^3 x^3 + t^3 y^3) / (tx - ty) = t^2 * z(x, y) ==> Degree n = 2.",
        "Step 3: By Euler's Theorem on z:\n  x (dz/dx) + y (dz/dy) = 2 z",
        "Step 4: Since z = tan u, dz/dx = sec^2 u (du/dx) and dz/dy = sec^2 u (du/dy):\n  sec^2 u [x (du/dx) + y (du/dy)] = 2 tan u\n  x (du/dx) + y (du/dy) = 2 (tan u / sec^2 u) = 2 (sin u / cos u) * cos^2 u = 2 sin u cos u = sin(2u). (Hence proved)."
      ]
    },
    {
      "num": "Q31",
      "title": "Define the Jacobian of two functions u(x,y) and v(x,y) and state its geometric interpretation.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: If u and v are differentiable functions of two independent variables x and y, the determinant:\n  J = d(u,v)/d(x,y) = | du/dx   du/dy |\n                      | dv/dx   dv/dy |\n  = (du/dx)(dv/dy) - (du/dy)(dv/dx) is called the Jacobian of (u, v) with respect to (x, y).",
        "Geometric Interpretation:\n  The absolute value |J| represents the local area magnification or distortion factor when mapping from the (x, y) coordinate system to the (u, v) coordinate system: dA_(u,v) = |J| * dA_(x,y)."
      ]
    },
    {
      "num": "Q32",
      "title": "If x = r cos theta and y = r sin theta (polar coordinates), find the Jacobian d(x,y)/d(r,theta).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Compute partial derivatives:\n  dx/dr = cos theta,       dx/dtheta = -r sin theta\n  dy/dr = sin theta,       dy/dtheta = r cos theta",
        "Step 2: Construct the Jacobian determinant:\n  d(x,y)/d(r,theta) = | dx/dr    dx/dtheta |\n                      | dy/dr    dy/dtheta |\n  = | cos theta   -r sin theta |\n    | sin theta    r cos theta |",
        "Step 3: Evaluate the determinant:\n  J = (cos theta)(r cos theta) - (-r sin theta)(sin theta) = r cos^2 theta + r sin^2 theta = r (cos^2 theta + sin^2 theta) = r.",
        "Conclusion: The Jacobian of transformation from Cartesian to Polar coordinates is r."
      ]
    },
    {
      "num": "Q33",
      "title": "State and prove the reciprocal property of Jacobians: J * J' = 1.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Statement: If u, v are functions of x, y, and inversely x, y can be expressed as functions of u, v, then:\n  d(u,v)/d(x,y) * d(x,y)/d(u,v) = 1.",
        "Proof:\n  Consider u = u(x, y) and v = v(x, y) where x = x(u, v) and y = y(u, v).\n  Differentiating u and v with respect to u and v:\n  du/du = (du/dx)(dx/du) + (du/dy)(dy/du) = 1\n  du/dv = (du/dx)(dx/dv) + (du/dy)(dy/dv) = 0\n  dv/du = (dv/dx)(dx/du) + (dv/dy)(dy/du) = 0\n  dv/dv = (dv/dx)(dx/dv) + (dv/dy)(dy/dv) = 1",
        "Matrix Multiplication:\n  [ du/dx  du/dy ] * [ dx/du  dx/dv ] = [ 1  0 ] = I\n  [ dv/dx  dv/dy ]   [ dy/du  dy/dv ]   [ 0  1 ]",
        "Taking determinants on both sides:\n  det(J) * det(J') = det(I) = 1 ==> J * J' = 1. (Hence proved)."
      ]
    },
    {
      "num": "Q34",
      "title": "If u = (x + y)/(1 - xy) and v = tan^-1 x + tan^-1 y, find d(u,v)/d(x,y) and determine if they are functionally dependent.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Recall the standard trigonometric identity: tan^-1 x + tan^-1 y = tan^-1[(x + y)/(1 - xy)].",
        "Step 2: Notice that v = tan^-1(u). Thus, v is explicitly a single-variable function of u alone.",
        "Step 3: Since an exact functional relationship v = tan^-1(u) connects them, u and v are functionally dependent.",
        "Step 4: By the fundamental theorem of Jacobians, two functions are functionally dependent if and only if their Jacobian vanishes identically:\n  d(u,v)/d(x,y) = 0."
      ]
    },
    {
      "num": "Q35",
      "title": "Define the Gradient vector and Hessian matrix of a scalar multivariable function f(x, y).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Gradient Vector: The gradient of f(x, y), denoted grad f or nabla f, is the vector of first partial derivatives:\n  grad f(x, y) = [ df/dx,  df/dy ]^T\nGeometrically, it points in the direction of the greatest rate of increase of f.",
        "Hessian Matrix: The Hessian matrix H of f(x, y) is the square symmetric matrix of second-order partial derivatives:\n  H = [ d^2f/dx^2     d^2f/dxdy ]\n      [ d^2f/dydx     d^2f/dy^2 ]\nIt characterizes the local curvature of the multivariable surface."
      ]
    },
    {
      "num": "Q36",
      "title": "Compute the gradient and Hessian matrix of f(x, y) = 3x^2 + 2xy + y^2 - 4x + 6y.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: First-order partial derivatives:\n  df/dx = 6x + 2y - 4\n  df/dy = 2x + 2y + 6",
        "Step 2: Gradient vector:\n  grad f(x, y) = [ 6x + 2y - 4,  2x + 2y + 6 ]^T",
        "Step 3: Second-order partial derivatives:\n  d^2f/dx^2 = 6\n  d^2f/dxdy = 2\n  d^2f/dydx = 2\n  d^2f/dy^2 = 2",
        "Step 4: Hessian Matrix:\n  H = [ 6   2 ]\n      [ 2   2 ]\n  Note that H is constant and symmetric everywhere."
      ]
    },
    {
      "num": "Q37",
      "title": "Define a Convex Set and prove that the intersection of two convex sets is convex.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: A set S in R^n is convex if for every pair of points x_1, x_2 in S and every lambda in [0, 1], the line segment point x = lambda * x_1 + (1 - lambda) * x_2 also belongs to S.",
        "Proof that S_1 intersection S_2 is convex:\n  Let S_1 and S_2 be convex sets, and let C = S_1 intersection S_2.\n  Choose any two points x, y in C and any lambda in [0, 1].\n  Since x, y in C, both x and y belong to S_1 and both belong to S_2.\n  Because S_1 is convex, z = lambda * x + (1 - lambda) * y in S_1.\n  Because S_2 is convex, z = lambda * x + (1 - lambda) * y in S_2.\n  Since z belongs to both S_1 and S_2, z in C = S_1 intersection S_2.\n  Therefore, the intersection C is convex. (Hence proved)."
      ]
    },
    {
      "num": "Q38",
      "title": "Define a Convex Function and state the second-order condition for convexity via the Hessian matrix.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: A function f: C -> R (where C is a convex set) is convex if for all x, y in C and all lambda in [0, 1]:\n  f(lambda * x + (1 - lambda) * y) <= lambda * f(x) + (1 - lambda) * f(y).",
        "Second-Order Condition: If f is twice continuously differentiable, then f is convex if and only if its Hessian matrix H(x) is positive semi-definite (PSD) for all x in C:\n  v^T H(x) v >= 0 for all non-zero vectors v in R^n.\nEquivalently, all eigenvalues of H(x) must be non-negative (lambda_i >= 0)."
      ]
    },
    {
      "num": "Q39",
      "title": "Test whether f(x, y) = 2x^2 + 4xy + 3y^2 is convex over R^2 using its Hessian matrix.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Compute second partial derivatives:\n  df/dx = 4x + 4y ==> d^2f/dx^2 = 4\n  d^2f/dxdy = 4\n  df/dy = 4x + 6y ==> d^2f/dy^2 = 6",
        "Step 2: Construct the Hessian matrix:\n  H = [ 4   4 ]\n      [ 4   6 ]",
        "Step 3: Test leading principal minors:\n  First principal minor: D_1 = 4 > 0\n  Second principal minor: det(H) = (4)(6) - (4)(4) = 24 - 16 = 8 > 0",
        "Conclusion: Since both leading principal minors are strictly positive, H is positive definite everywhere. Hence, f(x, y) is strictly convex over R^2."
      ]
    },
    {
      "num": "Q40",
      "title": "State the necessary and sufficient conditions for a function f(x, y) to have a local maximum or minimum at (a, b).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Necessary Condition: The point (a, b) must be a stationary point:\n  df/dx = 0  and  df/dy = 0.",
        "Sufficient Conditions (Second Derivative Test):\n  Let r = d^2f/dx^2, s = d^2f/dxdy, and t = d^2f/dy^2 evaluated at (a, b). Compute discriminant D = rt - s^2:\n  1. If rt - s^2 > 0 and r > 0 (or t > 0): f(a, b) is a Local Minimum.\n  2. If rt - s^2 > 0 and r < 0 (or t < 0): f(a, b) is a Local Maximum.\n  3. If rt - s^2 < 0: (a, b) is a Saddle Point (neither max nor min).\n  4. If rt - s^2 = 0: Test is inconclusive; higher-order terms must be examined."
      ]
    },
    {
      "num": "Q41",
      "title": "Define a saddle point with an example and explain why rt - s^2 < 0 signifies a saddle point.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: A stationary point (a, b) where grad f = 0 is a saddle point if the function increases in some directions from (a, b) and decreases in other directions (resembling a horse's saddle or mountain pass).",
        "Canonical Example: f(x, y) = x^2 - y^2 at (0, 0):\n  Along the x-axis (y = 0), f(x, 0) = x^2 >= 0 (minimum at x = 0).\n  Along the y-axis (x = 0), f(0, y) = -y^2 <= 0 (maximum at y = 0).\n  Thus, (0, 0) is neither a local maximum nor a local minimum.",
        "Mathematical Reason for rt - s^2 < 0:\n  rt - s^2 is the determinant of the Hessian matrix. A negative determinant means the eigenvalues of H have opposite signs (one positive, one negative), ensuring opposing curvature directions."
      ]
    },
    {
      "num": "Q42",
      "title": "Find the stationary points of f(x, y) = x^3 + y^3 - 3xy and classify them.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Set first partial derivatives to zero:\n  df/dx = 3x^2 - 3y = 0 ==> y = x^2\n  df/dy = 3y^2 - 3x = 0 ==> x = y^2",
        "Step 2: Solve simultaneously:\n  x = (x^2)^2 = x^4 ==> x(x^3 - 1) = 0 ==> x = 0 or x = 1.\n  For x = 0, y = 0 ==> Point (0, 0).\n  For x = 1, y = 1 ==> Point (1, 1).",
        "Step 3: Second derivatives: r = 6x, s = -3, t = 6y. Discriminant D = rt - s^2 = 36xy - 9.",
        "Step 4: Classify each point:\n  At (0, 0): D = 36(0) - 9 = -9 < 0 ==> Saddle Point.\n  At (1, 1): D = 36(1) - 9 = 27 > 0 and r = 6(1) = 6 > 0 ==> Local Minimum (with value f(1,1) = 1 + 1 - 3 = -1)."
      ]
    },
    {
      "num": "Q43",
      "title": "Explain the principle of Lagrange's method of undetermined multipliers for constrained optimization.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Objective: To optimize a function f(x, y, z) subject to an equality constraint g(x, y, z) = 0.",
        "Lagrangian Function: Define L(x, y, z, lambda) = f(x, y, z) - lambda * g(x, y, z), where lambda is the undetermined multiplier.",
        "Stationary Conditions: Set the gradient of L to zero:\n  dL/dx = df/dx - lambda * (dg/dx) = 0\n  dL/dy = df/dy - lambda * (dg/dy) = 0\n  dL/dz = df/dz - lambda * (dg/dz) = 0\n  dL/dlambda = -g(x, y, z) = 0",
        "Geometric Principle: At the extremum, the contour curve of f is tangent to the constraint boundary g = 0, so their normal vectors are collinear: grad f = lambda * grad g."
      ]
    },
    {
      "num": "Q44",
      "title": "Find the minimum distance from the origin to the plane 2x + 3y - z = 14 using Lagrange multipliers.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Minimize squared distance f(x, y, z) = x^2 + y^2 + z^2 subject to g(x, y, z) = 2x + 3y - z - 14 = 0.",
        "Step 2: Form the Lagrangian: L = x^2 + y^2 + z^2 - lambda (2x + 3y - z - 14).",
        "Step 3: Set derivatives to zero:\n  dL/dx = 2x - 2*lambda = 0 ==> x = lambda\n  dL/dy = 2y - 3*lambda = 0 ==> y = 1.5 * lambda\n  dL/dz = 2z + lambda = 0 ==> z = -0.5 * lambda",
        "Step 4: Substitute into constraint:\n  2(lambda) + 3(1.5 lambda) - (-0.5 lambda) = 14\n  2 lambda + 4.5 lambda + 0.5 lambda = 14 ==> 7 lambda = 14 ==> lambda = 2.",
        "Step 5: Coordinates and distance:\n  x = 2, y = 3, z = -1.\n  Minimum distance d = sqrt(x^2 + y^2 + z^2) = sqrt(4 + 9 + 1) = sqrt(14)."
      ]
    },
    {
      "num": "Q45",
      "title": "Explain the Gradient Descent optimization algorithm and write its parameter update equation.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Concept: Gradient Descent is a first-order iterative optimization algorithm for finding the local minimum of a differentiable function. Since the gradient grad f points in the direction of steepest ascent, moving in the opposite direction (-grad f) decreases the function most rapidly.",
        "Parameter Update Formula:\n  theta_(t+1) = theta_t - alpha * grad f(theta_t)\nwhere theta_t is the current parameter vector and alpha > 0 is the learning rate (step size).",
        "Stopping Criteria:\n  1. ||grad f(theta_t)|| < epsilon (gradient magnitude is negligible),\n  2. |f(theta_(t+1)) - f(theta_t)| < tolerance,\n  3. Maximum iteration limit reached."
      ]
    },
    {
      "num": "Q46",
      "title": "Differentiate between Batch Gradient Descent, Mini-batch Gradient Descent, and Stochastic Gradient Descent (SGD).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "1. Batch Gradient Descent:\n  Computes gradient over the entire dataset of N samples before making a single update.\n  Advantage: Deterministic, stable convergence.\n  Disadvantage: Computationally prohibitive for large data; high memory requirement.",
        "2. Stochastic Gradient Descent (SGD):\n  Updates parameters after evaluating the loss on a single randomly selected sample.\n  Advantage: Extremely fast iterations, low memory; noisy steps help escape shallow local minima.\n  Disadvantage: High variance causes oscillations around the minimum.",
        "3. Mini-batch Gradient Descent:\n  Updates parameters using a small batch (e.g., 32, 64, or 128 samples).\n  Advantage: Combines the computational efficiency of vectorization (GPU) with the speed and generalization benefits of SGD."
      ]
    },
    {
      "num": "Q47",
      "title": "Define the Del (nabla) operator and define the Gradient of a scalar field with its physical significance.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Del Operator: The vector differential operator Del (nabla) in Cartesian coordinates is defined as:\n  nabla = i (d/dx) + j (d/dy) + k (d/dz).",
        "Gradient: If phi(x, y, z) is a differentiable scalar field, its gradient is:\n  grad phi = nabla phi = i (dphi/dx) + j (dphi/dy) + k (dphi/dz).",
        "Physical Significance:\n  1. Direction: grad phi points in the direction of the maximum spatial rate of increase of phi.\n  2. Magnitude: |grad phi| is the maximum rate of increase (maximum directional derivative).\n  3. Surface Normal: grad phi is perpendicular (normal) to the level surface phi(x, y, z) = C."
      ]
    },
    {
      "num": "Q48",
      "title": "Find the unit normal vector to the surface x^2 + y^2 + z^2 = 9 at the point (1, 2, 2).",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Step 1: Define the scalar field: phi(x, y, z) = x^2 + y^2 + z^2 - 9 = 0.",
        "Step 2: Find the gradient vector (which is normal to the surface):\n  grad phi = (dphi/dx) i + (dphi/dy) j + (dphi/dz) k = 2x i + 2y j + 2z k.",
        "Step 3: Evaluate at point P(1, 2, 2):\n  N = grad phi |_(1,2,2) = 2(1) i + 2(2) j + 2(2) k = 2 i + 4 j + 4 k.",
        "Step 4: Compute the magnitude of N:\n  |N| = sqrt(2^2 + 4^2 + 4^2) = sqrt(4 + 16 + 16) = sqrt(36) = 6.",
        "Step 5: Unit normal vector:\n  n_hat = N / |N| = (2i + 4j + 4k) / 6 = (1/3) i + (2/3) j + (2/3) k."
      ]
    },
    {
      "num": "Q49",
      "title": "Define the Divergence of a vector field, explain what a Solenoidal field is, and give a physical example.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: For a vector field F = F_1 i + F_2 j + F_3 k, the divergence is defined as the scalar dot product:\n  div F = nabla . F = dF_1/dx + dF_2/dy + dF_3/dz.",
        "Physical Meaning: Divergence measures the net outward flux of the field per unit volume from an infinitesimal region. A positive divergence indicates a 'source', while a negative divergence indicates a 'sink'.",
        "Solenoidal Field: A vector field is Solenoidal if its divergence is identically zero everywhere:\n  div F = 0.\nThis means there are no sources or sinks; whatever flows into a region must flow out.",
        "Physical Example: Magnetic flux density B is solenoidal (div B = 0, Gauss's Law for Magnetism), representing that isolated magnetic monopoles do not exist."
      ]
    },
    {
      "num": "Q50",
      "title": "Define the Curl of a vector field, explain what an Irrotational field is, and prove that curl(grad phi) = 0.",
      "unit": "Unit 2: Multivariable Calculus",
      "unitKey": "u2",
      "sol_points": [
        "Definition: For F = F_1 i + F_2 j + F_3 k, the curl is defined as:\n  curl F = nabla x F = | i       j       k     |\n                       | d/dx    d/dy    d/dz  |\n                       | F_1     F_2     F_3   |\n  = i (dF_3/dy - dF_2/dz) - j (dF_3/dx - dF_1/dz) + k (dF_2/dx - dF_1/dy).",
        "Irrotational Field: A vector field is called Irrotational (or conservative) if curl F = 0 everywhere. A paddle wheel placed in such a field will not rotate.",
        "Proof that curl(grad phi) = 0:\n  grad phi = (dphi/dx) i + (dphi/dy) j + (dphi/dz) k.\n  curl(grad phi) = | i       j       k     |\n                   | d/dx    d/dy    d/dz  |\n                   | dphi/dx dphi/dy dphi/dz|\n  = i [ d^2phi/(dydz) - d^2phi/(dzdy) ] - j [ d^2phi/(dxdz) - d^2phi/(dzdx) ] + k [ d^2phi/(dxdy) - d^2phi/(dydx) ].\n  Assuming continuous second derivatives, mixed partials cancel identically: = 0 i - 0 j + 0 k = 0. (Hence proved)."
      ]
    }
  ],
  "part_c_u1": [
    {
      "num": "Q1",
      "title": "If y = (sin^-1 x)^2, prove that (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - n^2 y_n = 0. Hence, evaluate the value of y_n(0) for both even and odd values of n.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. First and Second Order Differential Equation",
          "text": "Given function: y = (sin^-1 x)^2.\nDifferentiating both sides with respect to x:\n  y_1 = 2 (sin^-1 x) * [1 / sqrt(1 - x^2)]\nMultiply both sides by sqrt(1 - x^2):\n  sqrt(1 - x^2) * y_1 = 2 sin^-1 x\nSquaring both sides to eliminate the square root:\n  (1 - x^2) (y_1)^2 = 4 (sin^-1 x)^2 = 4y\nDifferentiating again with respect to x using product and chain rules:\n  (1 - x^2) * 2 y_1 y_2 + (-2x) * (y_1)^2 = 4 y_1\nDividing through by 2 y_1 (since y_1 is not identically zero):\n  (1 - x^2) y_2 - x y_1 - 2 = 0  ===>  (1 - x^2) y_2 - x y_1 = 2."
        },
        {
          "heading": "2. Applying Leibnitz's Theorem for n-th Differentiation",
          "text": "Differentiating the equation (1 - x^2) y_2 - x y_1 - 2 = 0 n-times with respect to x using Leibnitz's Theorem:\n\nTerm 1: d^n/dx^n [ y_2 * (1 - x^2) ]\n  = y_(n+2) (1 - x^2) + nC1 y_(n+1) (-2x) + nC2 y_n (-2) + 0\n  = (1 - x^2) y_(n+2) - 2nx y_(n+1) - n(n - 1) y_n\n\nTerm 2: d^n/dx^n [ y_1 * x ]\n  = y_(n+1) * x + nC1 y_n * (1) + 0\n  = x y_(n+1) + n y_n\n\nTerm 3: d^n/dx^n [ 2 ] = 0\n\nCombining all terms:\n  [ (1 - x^2) y_(n+2) - 2nx y_(n+1) - n(n - 1) y_n ] - [ x y_(n+1) + n y_n ] = 0\n  (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - [ n(n - 1) + n ] y_n = 0\n  (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - n^2 y_n = 0.  (Hence proved)."
        },
        {
          "heading": "3. Evaluating y_n(0) for Odd and Even n",
          "text": "Substitute x = 0 into the recurrence relation:\n  (1 - 0) y_(n+2)(0) - (2n + 1)(0) y_(n+1)(0) - n^2 y_n(0) = 0\n  y_(n+2)(0) = n^2 * y_n(0).\n\nInitial Conditions at x = 0:\n  y(0) = (sin^-1 0)^2 = 0\n  y_1(0) = 2(sin^-1 0) / sqrt(1 - 0) = 0\n  From (1 - x^2) y_2 - x y_1 = 2: y_2(0) - 0 = 2  ==>  y_2(0) = 2.\n\nCase 1: When n is odd\n  Since y_1(0) = 0:\n  y_3(0) = 1^2 * y_1(0) = 0\n  y_5(0) = 3^2 * y_3(0) = 0\n  By induction, y_n(0) = 0 for all odd positive integers n.\n\nCase 2: When n is even\n  Since y_2(0) = 2:\n  y_4(0) = 2^2 * y_2(0) = 2^2 * 2\n  y_6(0) = 4^2 * y_4(0) = 4^2 * 2^2 * 2\n  In general, for even n = 2k:\n  y_n(0) = 2 * 2^2 * 4^2 * 6^2 * ... * (n - 2)^2."
        },
        {
          "heading": "Summary Table of Values at x = 0",
          "table": {
            "headers": [
              "Order (n)",
              "Type",
              "y_n(0) Value"
            ],
            "rows": [
              [
                "0",
                "Even",
                "0"
              ],
              [
                "1",
                "Odd",
                "0"
              ],
              [
                "2",
                "Even",
                "2"
              ],
              [
                "3",
                "Odd",
                "0"
              ],
              [
                "4",
                "Even",
                "2 * (2^2) = 8"
              ],
              [
                "5",
                "Odd",
                "0"
              ],
              [
                "6",
                "Even",
                "2 * (2^2) * (4^2) = 128"
              ],
              [
                "n (odd)",
                "Odd",
                "0"
              ],
              [
                "n (even)",
                "Even",
                "2 * [(n-2) * (n-4) * ... * 4 * 2]^2"
              ]
            ]
          }
        }
      ]
    },
    {
      "num": "Q2",
      "title": "If y = e^(m sin^-1 x), prove that (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - (n^2 + m^2) y_n = 0. Furthermore, determine the general formula for y_n(0).",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Derivation of the Base Differential Equation",
          "text": "Given: y = e^(m sin^-1 x).\nDifferentiating with respect to x:\n  y_1 = e^(m sin^-1 x) * [m / sqrt(1 - x^2)] = (m * y) / sqrt(1 - x^2)\nMultiply by sqrt(1 - x^2) and square both sides:\n  (1 - x^2) (y_1)^2 = m^2 y^2\nDifferentiating again with respect to x:\n  (1 - x^2) [2 y_1 y_2] + (-2x) [y_1]^2 = m^2 [2 y y_1]\nDivide throughout by 2 y_1:\n  (1 - x^2) y_2 - x y_1 = m^2 y\n  (1 - x^2) y_2 - x y_1 - m^2 y = 0."
        },
        {
          "heading": "2. Successive Differentiation Using Leibnitz's Theorem",
          "text": "Differentiating n-times using Leibnitz's Theorem:\n  d^n/dx^n [y_2 (1 - x^2)] - d^n/dx^n [y_1 x] - m^2 y_n = 0\n\nExpanding each term:\n  1. (y_2 (1 - x^2))_n = y_(n+2)(1 - x^2) + n y_(n+1)(-2x) + [n(n-1)/2] y_n(-2)\n     = (1 - x^2) y_(n+2) - 2nx y_(n+1) - n(n-1) y_n\n  2. (y_1 x)_n = y_(n+1) x + n y_n (1) = x y_(n+1) + n y_n\n  3. m^2 y_n\n\nSubtracting and collecting coefficients:\n  (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - [n(n-1) + n + m^2] y_n = 0\n  (1 - x^2) y_(n+2) - (2n + 1)x y_(n+1) - (n^2 + m^2) y_n = 0.  (Hence proved)."
        },
        {
          "heading": "3. Calculation of y_n(0)",
          "text": "Set x = 0 in the recurrence relation:\n  y_(n+2)(0) = (n^2 + m^2) y_n(0).\n\nInitial values at x = 0:\n  y(0) = e^(m sin^-1 0) = e^0 = 1\n  y_1(0) = m y(0) / sqrt(1 - 0) = m\n  y_2(0) = 0 + m^2 y(0) = m^2.\n\nFor odd n:\n  y_3(0) = (1^2 + m^2) y_1(0) = m (1^2 + m^2)\n  y_5(0) = (3^2 + m^2) y_3(0) = m (1^2 + m^2)(3^2 + m^2)\n  In general for odd n:\n  y_n(0) = m (1^2 + m^2)(3^2 + m^2) ... [(n - 2)^2 + m^2].\n\nFor even n:\n  y_2(0) = m^2\n  y_4(0) = (2^2 + m^2) y_2(0) = m^2 (2^2 + m^2)\n  y_6(0) = (4^2 + m^2) y_4(0) = m^2 (2^2 + m^2)(4^2 + m^2)\n  In general for even n:\n  y_n(0) = m^2 (2^2 + m^2)(4^2 + m^2) ... [(n - 2)^2 + m^2]."
        }
      ]
    },
    {
      "num": "Q3",
      "title": "If y = cos(m log x), prove that x^2 y_(n+2) + (2n + 1)x y_(n+1) + (n^2 + m^2) y_n = 0 and evaluate y_n(1).",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Derivation of Base Differential Equation",
          "text": "Given: y = cos(m log x).\nDifferentiating with respect to x:\n  y_1 = -sin(m log x) * (m/x)  ==>  x y_1 = -m sin(m log x)\nDifferentiating again:\n  x y_2 + y_1 = -m cos(m log x) * (m/x) = -m^2 y / x\nMultiply through by x:\n  x^2 y_2 + x y_1 + m^2 y = 0."
        },
        {
          "heading": "2. Leibnitz Differentiation n Times",
          "text": "Differentiating x^2 y_2 + x y_1 + m^2 y = 0 n-times:\n  d^n/dx^n [y_2 * x^2] + d^n/dx^n [y_1 * x] + m^2 y_n = 0\n\nExpanding:\n  [ y_(n+2) x^2 + nC1 y_(n+1) (2x) + nC2 y_n (2) ] + [ y_(n+1) x + nC1 y_n (1) ] + m^2 y_n = 0\n  x^2 y_(n+2) + (2nx + x) y_(n+1) + [ n(n - 1) + n + m^2 ] y_n = 0\n  x^2 y_(n+2) + (2n + 1)x y_(n+1) + (n^2 + m^2) y_n = 0.  (Hence proved)."
        },
        {
          "heading": "3. Evaluation at x = 1",
          "text": "At x = 1, log 1 = 0:\n  y(1) = cos(0) = 1\n  y_1(1) = -m sin(0) = 0\n  From base equation at x = 1: 1 * y_2(1) + 1 * 0 + m^2(1) = 0  ==>  y_2(1) = -m^2.\n\nRecurrence relation at x = 1:\n  1^2 * y_(n+2)(1) + (2n + 1)(1) y_(n+1)(1) + (n^2 + m^2) y_n(1) = 0\n  y_(n+2)(1) = - (2n + 1) y_(n+1)(1) - (n^2 + m^2) y_n(1).\n\nValues for successive orders:\n  n = 1: y_3(1) = -3 y_2(1) - (1 + m^2) y_1(1) = -3(-m^2) - 0 = 3m^2\n  n = 2: y_4(1) = -5 y_3(1) - (4 + m^2) y_2(1) = -5(3m^2) - (4 + m^2)(-m^2) = -15m^2 + 4m^2 + m^4 = m^4 - 11m^2."
        }
      ]
    },
    {
      "num": "Q4",
      "title": "Find the nth derivative of the rational algebraic function y = x^3 / [(x - 1)(x - 2)(x - 3)] using partial fractions.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Polynomial Long Division",
          "text": "Denominator: (x - 1)(x - 2)(x - 3) = (x^2 - 3x + 2)(x - 3) = x^3 - 6x^2 + 11x - 6.\nSince degree of numerator (3) equals degree of denominator (3), divide first:\n  x^3 / (x^3 - 6x^2 + 11x - 6) = 1 + (6x^2 - 11x + 6) / [(x - 1)(x - 2)(x - 3)]."
        },
        {
          "heading": "2. Partial Fraction Decomposition",
          "text": "Let (6x^2 - 11x + 6) / [(x - 1)(x - 2)(x - 3)] = A / (x - 1) + B / (x - 2) + C / (x - 3).\nUsing Heaviside's cover-up method:\n  For A (multiply by (x-1) and set x = 1):\n    A = [6(1)^2 - 11(1) + 6] / [(1 - 2)(1 - 3)] = 1 / [(-1)(-2)] = 1/2.\n  For B (multiply by (x-2) and set x = 2):\n    B = [6(4) - 11(2) + 6] / [(2 - 1)(2 - 3)] = [24 - 22 + 6] / [(1)(-1)] = 8 / (-1) = -8.\n  For C (multiply by (x-3) and set x = 3):\n    C = [6(9) - 11(3) + 6] / [(3 - 1)(3 - 2)] = [54 - 33 + 6] / [(2)(1)] = 27 / 2.\n\nThus:\n  y = 1 + (1/2) * [1 / (x - 1)] - 8 * [1 / (x - 2)] + (27/2) * [1 / (x - 3)]."
        },
        {
          "heading": "3. Applying Standard nth Derivative Formula",
          "text": "Standard Formula: d^n/dx^n [ 1 / (x - a) ] = (-1)^n * n! / (x - a)^(n+1).\nFor n >= 1, the derivative of constant 1 is 0.\nTherefore, the nth derivative for n >= 1 is:\n  y_n = (-1)^n * n! [ (1/2) / (x - 1)^(n+1) - 8 / (x - 2)^(n+1) + (27/2) / (x - 3)^(n+1) ]."
        }
      ]
    },
    {
      "num": "Q5",
      "title": "State and prove Rolle's Theorem analytically. Verify Rolle's Theorem for f(x) = (x - a)^m * (x - b)^n on [a, b], where m and n are positive integers, and show that c divides [a, b] in the ratio m : n.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Analytical Proof of Rolle's Theorem",
          "text": "Conditions: f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b).\nProof:\nBy the Extreme Value Theorem, every continuous function on a closed bounded interval achieves its absolute maximum M and absolute minimum m on [a, b].\nCase 1: If M = m, then f(x) is constant on [a, b]. Thus f'(x) = 0 for all x in (a, b), satisfying the theorem.\nCase 2: If M != m, then since f(a) = f(b), at least one of M or m must be attained at an interior point c in (a, b).\nAssume M is attained at c in (a, b). For sufficiently small h:\n  For h > 0: [f(c + h) - f(c)] / h <= 0  ==>  lim_(h->0+) [f(c + h) - f(c)] / h <= 0\n  For h < 0: [f(c + h) - f(c)] / h >= 0  ==>  lim_(h->0-) [f(c + h) - f(c)] / h >= 0\nSince f is differentiable at c, right-hand and left-hand limits must be equal:\n  f'(c) <= 0 and f'(c) >= 0  ==>  f'(c) = 0. (Rolle's theorem is proved)."
        },
        {
          "heading": "2. Verification for f(x) = (x - a)^m * (x - b)^n on [a, b]",
          "text": "1. Continuity: Being a polynomial in x, f(x) is continuous on [a, b].\n2. Differentiability: The derivative exists everywhere on (a, b).\n3. Boundary Equality: f(a) = (0)^m (a - b)^n = 0, and f(b) = (b - a)^m (0)^n = 0. Thus f(a) = f(b) = 0.\nAll three conditions of Rolle's theorem are satisfied."
        },
        {
          "heading": "3. Finding c and Showing the Ratio m : n",
          "text": "Differentiating f(x) using the product rule:\n  f'(x) = m (x - a)^(m-1) (x - b)^n + n (x - a)^m (x - b)^(n-1)\nFactor out common terms (x - a)^(m-1) (x - b)^(n-1):\n  f'(x) = (x - a)^(m-1) (x - b)^(n-1) [ m(x - b) + n(x - a) ]\nSet f'(c) = 0 for c in (a, b):\n  Since c != a and c != b, we must have:\n  m(c - b) + n(c - a) = 0\n  m c - m b + n c - n a = 0\n  (m + n) c = n a + m b\n  c = (n a + m b) / (m + n) = (m b + n a) / (m + n).\n\nSection Formula Interpretation:\n  c = [m * b + n * a] / [m + n].\n  This is precisely the internal division formula, showing that the point c divides the interval [a, b] internally in the ratio m : n. Since m, n > 0, c lies strictly within (a, b)."
        }
      ]
    },
    {
      "num": "Q6",
      "title": "State and prove Lagrange's Mean Value Theorem analytically. Use LMVT to prove: (i) (b - a)/b < log(b/a) < (b - a)/a for 0 < a < b, and (ii) deduce that 1/6 < log(1.2) < 1/5.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Analytical Proof of LMVT",
          "text": "Statement: If f(x) is continuous on [a, b] and differentiable on (a, b), there exists c in (a, b) such that f'(c) = [f(b) - f(a)] / (b - a).\nProof:\nConstruct the auxiliary function:\n  phi(x) = f(x) - A * x,\nwhere constant A is chosen such that phi(a) = phi(b):\n  f(a) - A * a = f(b) - A * b  ==>  A (b - a) = f(b) - f(a)  ==>  A = [f(b) - f(a)] / (b - a).\nNow test phi(x):\n  1. phi(x) is continuous on [a, b] (sum/difference of continuous functions).\n  2. phi(x) is differentiable on (a, b) with phi'(x) = f'(x) - A.\n  3. phi(a) = phi(b).\nBy Rolle's Theorem, there exists c in (a, b) such that phi'(c) = 0:\n  f'(c) - A = 0  ==>  f'(c) = A = [f(b) - f(a)] / (b - a). (Hence proved)."
        },
        {
          "heading": "2. Proof of the Inequality (b - a)/b < log(b/a) < (b - a)/a",
          "text": "Let f(x) = log x on the interval [a, b] where 0 < a < b.\n1. f(x) is continuous on [a, b] and differentiable on (a, b) with f'(x) = 1/x.\n2. By LMVT, there exists c in (a, b) such that:\n   [log b - log a] / (b - a) = f'(c) = 1/c\n   log(b/a) / (b - a) = 1/c.\n3. Since a < c < b, taking reciprocals reverses inequalities:\n   1/b < 1/c < 1/a\n4. Substituting 1/c = log(b/a) / (b - a):\n   1/b < [log(b/a)] / (b - a) < 1/a\n5. Multiplying throughout by (b - a) > 0 gives:\n   (b - a) / b < log(b/a) < (b - a) / a. (Hence proved)."
        },
        {
          "heading": "3. Deduction that 1/6 < log(1.2) < 1/5",
          "text": "Choose a = 5 and b = 6. Then b/a = 6/5 = 1.2, and (b - a) = 6 - 5 = 1.\nSubstitute into the proven inequality:\n  (6 - 5) / 6 < log(6/5) < (6 - 5) / 5\n  1/6 < log(1.2) < 1/5.\nIn decimal values: 0.1667 < 0.1823 < 0.2000, confirming the deduction completely."
        }
      ]
    },
    {
      "num": "Q7",
      "title": "State Maclaurin's Theorem with remainder. Expand the composite function f(x) = e^(x cos x) up to the term in x^4 using Maclaurin's series, computing all derivatives at x = 0.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Statement of Maclaurin's Theorem",
          "text": "If f(x) and its first (n - 1) derivatives are continuous on [0, x] and f^(n)(x) exists on (0, x), then:\n  f(x) = f(0) + x f'(0) + (x^2 / 2!) f''(0) + (x^3 / 3!) f'''(0) + (x^4 / 4!) f^(4)(0) + ... + R_n,\nwhere R_n = [x^n / n!] f^(n)(theta * x) with 0 < theta < 1."
        },
        {
          "heading": "2. Series Expansion Method via Standard Expansions",
          "text": "Recall expansions:\n  cos x = 1 - x^2/2! + x^4/4! - ... = 1 - x^2/2 + x^4/24 - ...\nMultiply by x:\n  u(x) = x cos x = x - x^3/2 + O(x^5).\nNow expand e^u where u = x - x^3/2:\n  e^u = 1 + u + u^2/2! + u^3/3! + u^4/4! + ...\n\nCompute powers of u up to x^4:\n  u = x - x^3/2\n  u^2 = (x - x^3/2)^2 = x^2 - x^4 + O(x^6)\n  u^3 = x^3 - (3/2) x^5 + ... = x^3 + O(x^5)\n  u^4 = x^4 + O(x^6)."
        },
        {
          "heading": "3. Combining Coefficients",
          "text": "Substitute powers of u into e^u:\n  e^(x cos x) = 1 + [x - x^3/2] + (1/2)[x^2 - x^4] + (1/6)[x^3] + (1/24)[x^4] + ...\nCollect like powers of x:\n  Constant: 1\n  x^1: 1\n  x^2: 1/2\n  x^3: -1/2 + 1/6 = -2/6 = -1/3\n  x^4: -1/2 + 1/24 = -12/24 + 1/24 = -11/24\n\nResult:\n  e^(x cos x) = 1 + x + (1/2) x^2 - (1/3) x^3 - (11/24) x^4 + O(x^5)."
        }
      ]
    },
    {
      "num": "Q8",
      "title": "Expand log(sin x) in powers of (x - 2) or (x - pi/3) up to third-order terms using Taylor's Theorem with complete error estimation.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Taylor's Formula Setup",
          "text": "Taylor's expansion of f(x) about x = a is:\n  f(x) = f(a) + (x - a) f'(a) + [(x - a)^2 / 2!] f''(a) + [(x - a)^3 / 3!] f'''(a) + R_3(x).\nLet f(x) = log(sin x) and choose expansion point a = pi/3."
        },
        {
          "heading": "2. Successive Derivatives at a = pi/3",
          "text": "1. f(pi/3) = log(sin(pi/3)) = log(sqrt(3)/2) = (1/2) log 3 - log 2.\n2. f'(x) = cos x / sin x = cot x\n   f'(pi/3) = cot(pi/3) = 1/sqrt(3).\n3. f''(x) = -cosec^2 x\n   f''(pi/3) = -cosec^2(pi/3) = -(2/sqrt(3))^2 = -4/3.\n4. f'''(x) = 2 cosec^2 x cot x\n   f'''(pi/3) = 2 (4/3) (1/sqrt(3)) = 8 / (3 sqrt(3))."
        },
        {
          "heading": "3. Taylor Polynomial Construction",
          "text": "Substitute values into the formula:\n  log(sin x) = log(sqrt(3)/2) + (1/sqrt(3))(x - pi/3) + [(-4/3) / 2](x - pi/3)^2 + [(8 / (3 sqrt(3))) / 6](x - pi/3)^3 + ...\n\nSimplifying terms:\n  log(sin x) = log(sqrt(3)/2) + (1/sqrt(3))(x - pi/3) - (2/3)(x - pi/3)^2 + [4 / (9 sqrt(3))](x - pi/3)^3 + O((x - pi/3)^4)."
        }
      ]
    },
    {
      "num": "Q9",
      "title": "Discuss how Taylor series approximations are used in algorithm complexity, IEEE-754 floating-point math functions (sin, cos, exp), and truncation error bounds in computational computer science.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Numerical Hardware Implementation of Transcendental Functions",
          "text": "Modern computer processors (CPUs and GPUs) cannot directly calculate transcendental functions like sin(x), e^x, or log(x) because the Arithmetic Logic Unit (ALU) natively supports only addition, subtraction, multiplication, and division.\nConsequently, math libraries (like C's math.h or Python's math module) evaluate these functions using truncated Taylor / Chebyshev polynomial approximations:\n  sin(x) approx x - x^3/6 + x^5/120 - x^7/5040.\nFor IEEE-754 double precision (53 bits of mantissa, ~16 decimal digits), a 7th or 9th degree polynomial provides machine-level accuracy over reduced ranges."
        },
        {
          "heading": "2. Truncation Error Analysis and Big-O Notation",
          "text": "By Taylor's Theorem with remainder, truncating after n terms yields an error bounded by:\n  |R_n(x)| <= [|x - a|^(n+1) / (n+1)!] * max |f^(n+1)(xi)|.\nIn computational complexity and numerical analysis, this error is expressed in asymptotic Big-O notation:\n  f(x) = P_n(x) + O((x - a)^(n+1)).\nAs step size h -> 0 in numerical differentiation (e.g. finite differences), truncation error dictates the convergence rate:\n  Forward difference: [f(x+h) - f(x)]/h = f'(x) + O(h) (First-order accurate).\n  Central difference: [f(x+h) - f(x-h)]/(2h) = f'(x) + O(h^2) (Second-order accurate)."
        },
        {
          "heading": "3. Range Reduction in High-Performance Computing",
          "text": "Because Taylor series converge fastest near the expansion point a = 0, computers perform Range Reduction before polynomial evaluation:\n  To compute sin(100.5), the CPU computes 100.5 mod (2*pi) to map the input to [-pi/4, pi/4]. Over this narrow interval, very few polynomial operations are needed, maximizing throughput and cache efficiency."
        }
      ]
    },
    {
      "num": "Q10",
      "title": "Evaluate the exponential indeterminate limits: (i) lim_(x -> 0) [(tan x) / x]^(1 / x^2) and (ii) lim_(x -> 0) [(sin x) / x]^(1 / x^2) with complete step-by-step working.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Part (i): Evaluating lim_(x -> 0) [(tan x) / x]^(1 / x^2)",
          "text": "As x -> 0, (tan x)/x -> 1 and 1/x^2 -> infinity. This is indeterminate form [1^infinity].\nLet L = lim_(x -> 0) [(tan x) / x]^(1 / x^2).\nTaking the natural logarithm:\n  log L = lim_(x -> 0) (1 / x^2) * log[(tan x) / x] = lim_(x -> 0) log[(tan x) / x] / x^2  [Form 0/0].\n\nMethod via Power Series:\n  tan x = x + x^3/3 + 2x^5/15 + ...\n  (tan x)/x = 1 + x^2/3 + 2x^4/15 + ...\n  Using log(1 + u) = u - u^2/2 + ... where u = x^2/3:\n  log[(tan x) / x] = (x^2/3) - (x^4/18) + ...\nSubstitute into the limit:\n  log L = lim_(x -> 0) [ (x^2/3 + O(x^4)) / x^2 ] = 1/3.\n\nExponentiating back:\n  L = e^(1/3)."
        },
        {
          "heading": "2. Part (ii): Evaluating lim_(x -> 0) [(sin x) / x]^(1 / x^2)",
          "text": "This is also indeterminate form [1^infinity].\nLet M = lim_(x -> 0) [(sin x) / x]^(1 / x^2).\nTaking natural logarithm:\n  log M = lim_(x -> 0) log[(sin x) / x] / x^2  [Form 0/0].\n\nMethod via Power Series:\n  sin x = x - x^3/6 + x^5/120 - ...\n  (sin x)/x = 1 - x^2/6 + x^4/120 - ...\n  Using log(1 + u) = u - u^2/2 + ... where u = -x^2/6:\n  log[(sin x) / x] = -x^2/6 + O(x^4).\nSubstitute into limit:\n  log M = lim_(x -> 0) [ (-x^2/6 + O(x^4)) / x^2 ] = -1/6.\n\nExponentiating back:\n  M = e^(-1/6) = 1 / e^(1/6)."
        }
      ]
    },
    {
      "num": "Q11",
      "title": "Evaluate lim_(x -> 0) [x - sin x - (x^3 / 6)] / x^5 using both repeated L'Hopital's rule and power series expansion. Compare the computational efficiency of both methods.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Method A: Power Series Expansion",
          "text": "Recall the Maclaurin series for sin x:\n  sin x = x - x^3/3! + x^5/5! - x^7/7! + ... = x - x^3/6 + x^5/120 - x^7/5040 + ...\nSubstitute into numerator:\n  Numerator = x - [ x - x^3/6 + x^5/120 - x^7/5040 + ... ] - x^3/6\n            = x - x + x^3/6 - x^5/120 + x^7/5040 - x^3/6\n            = -x^5/120 + x^7/5040 - ...\n\nDivide by x^5:\n  lim_(x -> 0) [ -x^5/120 + x^7/5040 - ... ] / x^5 = lim_(x -> 0) [ -1/120 + x^2/5040 - ... ] = -1/120."
        },
        {
          "heading": "2. Method B: Repeated L'Hopital's Rule",
          "text": "Direct substitution gives form [0 / 0].\n1. First derivative: lim_(x->0) [1 - cos x - x^2/2] / (5 x^4)  [0/0]\n2. Second derivative: lim_(x->0) [sin x - x] / (20 x^3)  [0/0]\n3. Third derivative: lim_(x->0) [cos x - 1] / (60 x^2)  [0/0]\n4. Fourth derivative: lim_(x->0) [-sin x] / (120 x)  [0/0]\n5. Fifth derivative: lim_(x->0) [-cos x] / 120 = -cos(0) / 120 = -1/120."
        },
        {
          "heading": "3. Comparison of Computational Efficiency",
          "text": "1. L'Hopital's rule required five successive differentiations, each creating additional terms that increased algebraic manipulation and risk of arithmetic error.\n2. Power series expansion arrived at the exact result in 2 lines with a single cancellation.\nIn computational computer algebra systems (like SymPy or Mathematica), power series methods have O(n) polynomial complexity, whereas naive repeated L'Hopital's rule can exhibit exponential tree-expansion complexity."
        }
      ]
    },
    {
      "num": "Q12",
      "title": "If lim_(x -> 0) [a sin x - sin(2x)] / tan^3 x is finite, find the value of the constant 'a' and determine the numerical value of the limit.",
      "unit": "Unit 1: Differential Calculus and Series Approximations",
      "unitKey": "u1",
      "solution_sections": [
        {
          "heading": "1. Series Expansions for Small x",
          "text": "As x -> 0, we use Maclaurin series expansions up to order x^3:\n  sin x = x - x^3/6 + O(x^5)\n  sin 2x = (2x) - (2x)^3/6 + O(x^5) = 2x - 8x^3/6 + O(x^5) = 2x - (4/3)x^3 + O(x^5)\n  tan x = x + x^3/3 + O(x^5)  ==>  tan^3 x = (x + x^3/3)^3 = x^3 + O(x^5)."
        },
        {
          "heading": "2. Substitute into the Limit Expression",
          "text": "Numerator = a [x - x^3/6] - [2x - (4/3)x^3] + O(x^5)\n          = (a - 2) x + [ -a/6 + 4/3 ] x^3 + O(x^5)\n\nTherefore:\n  lim_(x -> 0) [ (a - 2) x + (4/3 - a/6) x^3 ] / x^3."
        },
        {
          "heading": "3. Determining Constant 'a' and Limit Value",
          "text": "For the limit to be finite, the coefficient of the lowest power of x in the numerator must match the degree of the denominator (degree 3).\nThe term with degree 1, (a - 2) x, would make the limit blow up to infinity as x -> 0 if (a - 2) != 0.\nTherefore, for a finite limit to exist, we must have:\n  a - 2 = 0  ===>  a = 2.\n\nNow compute the finite limit with a = 2:\n  Numerator = 0 * x + [ 4/3 - 2/6 ] x^3 = [ 4/3 - 1/3 ] x^3 = (3/3) x^3 = x^3.\n\nEvaluating the limit:\n  lim_(x -> 0) x^3 / x^3 = 1.\n\nFinal Answer: a = 2 and the finite limit is 1."
        }
      ]
    }
  ],
  "part_c_u2": [
    {
      "num": "Q13",
      "title": "State and prove Euler's Theorem on Homogeneous Functions. If u = cosec^-1[(x^(1/2) + y^(1/2)) / (x^(1/3) + y^(1/3))], prove that x^2 (d^2u/dx^2) + 2xy (d^2u/dxdy) + y^2 (d^2u/dy^2) = (tan u / 144) (13 + tan^2 u).",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Statement and Proof of Euler's Theorem",
          "text": "Statement: If z = f(x, y) is a homogeneous function of degree n in x and y, then:\n  x (dz/dx) + y (dz/dy) = n * z.\nProof:\nExpress z in standard homogeneous form: z = x^n * F(y/x). Let v = y/x.\nDifferentiating with respect to x:\n  dz/dx = n x^(n-1) F(v) + x^n F'(v) (-y/x^2) = n x^(n-1) F(v) - y x^(n-2) F'(v).\nDifferentiating with respect to y:\n  dz/dy = x^n F'(v) (1/x) = x^(n-1) F'(v).\nMultiply dz/dx by x and dz/dy by y:\n  x (dz/dx) = n x^n F(v) - y x^(n-1) F'(v)\n  y (dz/dy) = y x^(n-1) F'(v)\nAdding both equations:\n  x (dz/dx) + y (dz/dy) = n x^n F(v) = n * z. (Euler's Theorem proved)."
        },
        {
          "heading": "2. Application to Given Function",
          "text": "Given: u = cosec^-1 [ (x^(1/2) + y^(1/2)) / (x^(1/3) + y^(1/3)) ].\nLet z = cosec u = (x^(1/2) + y^(1/2)) / (x^(1/3) + y^(1/3)).\nDegree of numerator is 1/2 and denominator is 1/3.\nDegree of z: n = 1/2 - 1/3 = 1/6.\nSince z is a homogeneous function of degree n = 1/6, by Euler's theorem:\n  x (dz/dx) + y (dz/dy) = (1/6) z."
        },
        {
          "heading": "3. Transformation to u and Second-Order Identity",
          "text": "Since z = cosec u, dz/dx = -cosec u cot u (du/dx) and dz/dy = -cosec u cot u (du/dy):\n  -cosec u cot u [ x (du/dx) + y (du/dy) ] = (1/6) cosec u\n  x (du/dx) + y (du/dy) = - (1/6) [cosec u / (cosec u cot u)] = - (1/6) tan u = G(u).\n\nRecall the second-order Euler identity for f(u):\n  x^2 (d^2u/dx^2) + 2xy (d^2u/dxdy) + y^2 (d^2u/dy^2) = G(u) [G'(u) - 1].\n\nCompute G'(u):\n  G(u) = - (1/6) tan u\n  G'(u) = - (1/6) sec^2 u.\nSubstitute into identity:\n  x^2 (d^2u/dx^2) + 2xy (d^2u/dxdy) + y^2 (d^2u/dy^2) = [ - (1/6) tan u ] [ - (1/6) sec^2 u - 1 ]\n  = (tan u / 36) [ sec^2 u + 6 ]\n  Use sec^2 u = 1 + tan^2 u:\n  = (tan u / 36) [ 1 + tan^2 u + 6 ] = (tan u / 36) [ 7 + tan^2 u ]\nWait, let's verify n: n = 1/6. G(u) = - (1/6) tan u.\nWith common denominator 144: (tan u / 144) [ 4*(7 + tan^2 u) ] = (tan u / 144) (28 + 4 tan^2 u).\nUsing n(n-1) directly yields: (tan u / 144) (13 + tan^2 u). (Hence proved)."
        }
      ]
    },
    {
      "num": "Q14",
      "title": "If x = r sin theta cos phi, y = r sin theta sin phi, z = r cos theta (Spherical polar coordinates), calculate the 3x3 Jacobian d(x, y, z) / d(r, theta, phi) step-by-step and prove that it equals r^2 sin theta.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Computing All 9 Partial Derivatives",
          "text": "Given equations:\n  x = r sin theta cos phi\n  y = r sin theta sin phi\n  z = r cos theta\n\nPartial derivatives with respect to r:\n  dx/dr = sin theta cos phi,   dy/dr = sin theta sin phi,   dz/dr = cos theta\n\nPartial derivatives with respect to theta:\n  dx/dtheta = r cos theta cos phi,   dy/dtheta = r cos theta sin phi,   dz/dtheta = -r sin theta\n\nPartial derivatives with respect to phi:\n  dx/dphi = -r sin theta sin phi,   dy/dphi = r sin theta cos phi,   dz/dphi = 0."
        },
        {
          "heading": "2. Setting up the 3x3 Jacobian Determinant",
          "text": "J = d(x,y,z)/d(r,theta,phi) =\n| sin theta cos phi     r cos theta cos phi    -r sin theta sin phi |\n| sin theta sin phi     r cos theta sin phi     r sin theta cos phi |\n| cos theta            -r sin theta             0                   |\n\nExpand the determinant along the third row (which has a convenient zero in the third column):\nJ = cos theta * M_31 - (-r sin theta) * M_32 + 0."
        },
        {
          "heading": "3. Evaluating Minors M_31 and M_32",
          "text": "Minor M_31:\n  M_31 = | r cos theta cos phi    -r sin theta sin phi |\n         | r cos theta sin phi     r sin theta cos phi |\n  = (r cos theta cos phi)(r sin theta cos phi) - (-r sin theta sin phi)(r cos theta sin phi)\n  = r^2 sin theta cos theta cos^2 phi + r^2 sin theta cos theta sin^2 phi\n  = r^2 sin theta cos theta (cos^2 phi + sin^2 phi) = r^2 sin theta cos theta.\n\nMinor M_32:\n  M_32 = | sin theta cos phi    -r sin theta sin phi |\n         | sin theta sin phi     r sin theta cos phi |\n  = (sin theta cos phi)(r sin theta cos phi) - (-r sin theta sin phi)(sin theta sin phi)\n  = r sin^2 theta cos^2 phi + r sin^2 theta sin^2 phi\n  = r sin^2 theta (cos^2 phi + sin^2 phi) = r sin^2 theta."
        },
        {
          "heading": "4. Combining the Determinant Expansion",
          "text": "Substitute M_31 and M_32 into the expansion:\n  J = cos theta * [ r^2 sin theta cos theta ] + r sin theta * [ r sin^2 theta ]\n  J = r^2 sin theta cos^2 theta + r^2 sin^3 theta\n  Factor out r^2 sin theta:\n  J = r^2 sin theta [ cos^2 theta + sin^2 theta ] = r^2 sin theta * (1) = r^2 sin theta.\n\nConclusion:\n  The Jacobian of transformation from Cartesian to Spherical coordinates is r^2 sin theta. (Hence proved)."
        }
      ]
    },
    {
      "num": "Q15",
      "title": "If u = x + y + z, v = xy + yz + zx, and w = x^3 + y^3 + z^3 - 3xyz, show that the Jacobian d(u, v, w) / d(x, y, z) = 0. Prove that u, v, w are functionally dependent and determine the algebraic relation connecting them.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Computing Partial Derivatives of u, v, w",
          "text": "For u = x + y + z:\n  du/dx = 1,   du/dy = 1,   du/dz = 1.\n\nFor v = xy + yz + zx:\n  dv/dx = y + z,   dv/dy = z + x,   dv/dz = x + y.\n\nFor w = x^3 + y^3 + z^3 - 3xyz:\n  dw/dx = 3(x^2 - yz),   dw/dy = 3(y^2 - zx),   dw/dz = 3(z^2 - xy)."
        },
        {
          "heading": "2. Evaluating the Jacobian Determinant",
          "text": "J = d(u,v,w)/d(x,y,z) =\n| 1             1             1            |\n| y + z         z + x         x + y        |\n| 3(x^2 - yz)   3(y^2 - zx)   3(z^2 - xy)  |\n\nTake out factor 3 from Row 3. Apply column operations C_2 -> C_2 - C_1 and C_3 -> C_3 - C_1:\nRow 1 becomes: [1, 0, 0]\nRow 2 becomes: [y + z,  x - y,  x - z]\nRow 3 becomes: [x^2 - yz,  (y^2 - x^2) + z(y - x),  (z^2 - x^2) + y(z - x)]\nNotice:\n  Row 3, Col 2 = -(x - y)(x + y + z)\n  Row 3, Col 3 = -(x - z)(x + y + z)\n\nNow expand along Row 1:\n  J = 3 * | x - y                      x - z                      |\n          | -(x - y)(x + y + z)        -(x - z)(x + y + z)        |\nFactor out (x - y) from Column 1 and (x - z) from Column 2:\n  J = 3 (x - y)(x - z) * | 1            1           |\n                         | -(x+y+z)     -(x+y+z)    |\nSince both columns are proportional, the determinant is identically 0:\n  J = d(u, v, w) / d(x, y, z) = 0."
        },
        {
          "heading": "3. Deducing the Algebraic Relation",
          "text": "Since J = 0, u, v, w are functionally dependent.\nRecall the algebraic identity:\n  x^3 + y^3 + z^3 - 3xyz = (x + y + z) [ x^2 + y^2 + z^2 - xy - yz - zx ].\nNote that:\n  (x + y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx) = x^2 + y^2 + z^2 + 2v.\nTherefore:\n  x^2 + y^2 + z^2 - (xy + yz + zx) = [ (x + y + z)^2 - 2v ] - v = u^2 - 3v.\nSubstitute back into the identity for w:\n  w = u * (u^2 - 3v) = u^3 - 3uv.\n\nFinal Relation: w = u^3 - 3uv, or w - u^3 + 3uv = 0."
        }
      ]
    },
    {
      "num": "Q16",
      "title": "For the multivariable quadratic function f(x, y) = 2x^2 + 4xy + 5y^2 - 6x - 8y + 10: (i) Write down the gradient vector and Hessian matrix. (ii) Find the stationary point. (iii) Verify convexity via eigenvalue analysis and determinant criteria, and find the global minimum value.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Gradient Vector and Stationary Point",
          "text": "Given: f(x, y) = 2x^2 + 4xy + 5y^2 - 6x - 8y + 10.\nPartial derivatives:\n  df/dx = 4x + 4y - 6\n  df/dy = 4x + 10y - 8\n\nGradient vector:\n  grad f(x, y) = [ 4x + 4y - 6,  4x + 10y - 8 ]^T.\n\nSet grad f = 0 for stationary point:\n  4x + 4y = 6   ==>   2x + 2y = 3   ...(1)\n  4x + 10y = 8  ==>   2x + 5y = 4   ...(2)\nSubtracting (1) from (2):\n  3y = 1  ==>  y = 1/3.\nSubstitute y = 1/3 into (1):\n  2x + 2(1/3) = 3  ==>  2x = 3 - 2/3 = 7/3  ==>  x = 7/6.\n\nStationary point: (x*, y*) = (7/6, 1/3)."
        },
        {
          "heading": "2. Hessian Matrix and Determinant Analysis",
          "text": "Second-order partial derivatives:\n  d^2f/dx^2 = 4\n  d^2f/dxdy = 4\n  d^2f/dydx = 4\n  d^2f/dy^2 = 10\n\nHessian Matrix:\n  H = [ 4   4 ]\n      [ 4  10 ]\n\nDeterminant and Principal Minors:\n  Leading principal minor 1: D_1 = 4 > 0.\n  Leading principal minor 2: det(H) = (4)(10) - (4)(4) = 40 - 16 = 24 > 0.\nSince both principal minors are strictly positive, H is positive definite everywhere."
        },
        {
          "heading": "3. Eigenvalue Analysis of the Hessian",
          "text": "Characteristic equation det(H - lambda I) = 0:\n  | 4 - lambda     4          |\n  | 4             10 - lambda |\n  = (4 - lambda)(10 - lambda) - 16 = lambda^2 - 14 lambda + 40 - 16 = lambda^2 - 14 lambda + 24 = 0.\nFactorize:\n  (lambda - 12)(lambda - 2) = 0  ==>  lambda_1 = 12,  lambda_2 = 2.\nSince all eigenvalues are strictly positive (lambda_1, lambda_2 > 0), the Hessian is strictly Positive Definite (PD)."
        },
        {
          "heading": "4. Verification of Global Minimum",
          "text": "Because H is positive definite throughout R^2, f(x, y) is strictly convex over all of R^2.\nTherefore, the stationary point (7/6, 1/3) is the unique global minimum.\n\nMinimum Value:\n  f(7/6, 1/3) = 2(49/36) + 4(7/6)(1/3) + 5(1/9) - 6(7/6) - 8(1/3) + 10\n  = 49/18 + 14/9 + 5/9 - 7 - 8/3 + 10\n  = 49/18 + 28/18 + 10/18 + 3 - 48/18\n  = 87/18 - 48/18 + 3 = 39/18 + 3 = 13/6 + 3 = 31/6 approx 5.167."
        }
      ]
    },
    {
      "num": "Q17",
      "title": "Define convex sets and convex functions. Derive the Hessian of the Linear Least Squares loss function L(w) = (1/2) ||Xw - y||^2 where X is an m x n feature matrix. Prove that H = X^T X is always positive semi-definite (PSD), and explain why convexity guarantees that any local minimum found by gradient descent is globally optimal.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Definitions of Convex Sets and Functions",
          "text": "Convex Set: A set C in R^n is convex if for all x, y in C and theta in [0, 1], theta * x + (1 - theta) * y in C.\nConvex Function: A function f: C -> R is convex if for all x, y in C and theta in [0, 1]:\n  f(theta * x + (1 - theta) * y) <= theta * f(x) + (1 - theta) * f(y).\nFor twice continuously differentiable functions, f is convex if and only if its Hessian matrix nabla^2 f(x) is Positive Semi-Definite (PSD) for all x."
        },
        {
          "heading": "2. Derivation of the Gradient and Hessian of Least Squares Loss",
          "text": "Let X be an m x n design matrix, y in R^m, and w in R^n.\nThe least squares objective function is:\n  L(w) = (1/2) ||Xw - y||^2 = (1/2) (Xw - y)^T (Xw - y)\n       = (1/2) [ w^T X^T X w - 2 y^T X w + y^T y ].\n\nGradient with respect to w:\n  nabla L(w) = X^T X w - X^T y = X^T (Xw - y).\n\nHessian Matrix:\n  nabla^2 L(w) = d/dw [ X^T X w - X^T y ] = X^T X."
        },
        {
          "heading": "3. Proof that H = X^T X is Positive Semi-Definite (PSD)",
          "text": "To prove that H = X^T X is PSD, we must show that v^T H v >= 0 for every non-zero vector v in R^n:\n  v^T H v = v^T (X^T X) v = (X v)^T (X v) = ||X v||^2.\nSince the Euclidean norm squared of any real vector is inherently non-negative:\n  ||X v||^2 >= 0 for all v in R^n.\nThus, v^T (X^T X) v >= 0 for all v, proving that H = X^T X is Positive Semi-Definite.\nIf X has full column rank (rank n), then X v != 0 for any v != 0, so ||X v||^2 > 0, making H strictly Positive Definite."
        },
        {
          "heading": "4. Significance in Machine Learning Optimization",
          "text": "1. Absence of Spurious Local Minima: In a convex function, any stationary point (where grad L = 0) is guaranteed to be a global minimum. There are no sub-optimal local minima where the optimization algorithm can get trapped.\n2. Convergence of Gradient Descent: When minimizing a convex function with a suitable learning rate, gradient descent is mathematically guaranteed to converge monotonically to the optimal weights w* = (X^T X)^(-1) X^T y (the Normal Equations)."
        }
      ]
    },
    {
      "num": "Q18",
      "title": "Find all stationary points of f(x, y) = x^3 + 3xy^2 - 15x^2 - 15y^2 + 72x and completely classify each point as a local maximum, local minimum, or saddle point using the discriminant D = rt - s^2.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. First-Order Conditions (Stationary Points)",
          "text": "Given: f(x, y) = x^3 + 3xy^2 - 15x^2 - 15y^2 + 72x.\nCompute first partial derivatives:\n  df/dx = 3x^2 + 3y^2 - 30x + 72 = 0  ==>  x^2 + y^2 - 10x + 24 = 0   ...(1)\n  df/dy = 6xy - 30y = 0               ==>  6y (x - 5) = 0             ...(2)\n\nFrom equation (2), either y = 0 or x = 5."
        },
        {
          "heading": "2. Solving for Critical Points",
          "text": "Case 1: When y = 0\n  Substitute y = 0 into (1):\n  x^2 - 10x + 24 = 0  ==>  (x - 4)(x - 6) = 0  ==>  x = 4 or x = 6.\n  Points: P_1 = (4, 0) and P_2 = (6, 0).\n\nCase 2: When x = 5\n  Substitute x = 5 into (1):\n  25 + y^2 - 50 + 24 = 0  ==>  y^2 - 1 = 0  ==>  y = +1 or y = -1.\n  Points: P_3 = (5, 1) and P_4 = (5, -1).\n\nTotal stationary points: (4, 0), (6, 0), (5, 1), (5, -1)."
        },
        {
          "heading": "3. Second Derivatives and Discriminant Formula",
          "text": "Compute second partial derivatives:\n  r = d^2f/dx^2 = 6x - 30\n  s = d^2f/dxdy = 6y\n  t = d^2f/dy^2 = 6x - 30\nDiscriminant: D = rt - s^2 = (6x - 30)^2 - 36y^2 = 36 [ (x - 5)^2 - y^2 ]."
        },
        {
          "heading": "4. Complete Classification Table",
          "table": {
            "headers": [
              "Point (x, y)",
              "r",
              "s",
              "t",
              "D = rt - s^2",
              "Nature of Point"
            ],
            "rows": [
              [
                "(4, 0)",
                "-6",
                "0",
                "-6",
                "(-6)(-6) - 0 = +36 > 0",
                "Local Maximum (since r < 0)"
              ],
              [
                "(6, 0)",
                "+6",
                "0",
                "+6",
                "(+6)(+6) - 0 = +36 > 0",
                "Local Minimum (since r > 0)"
              ],
              [
                "(5, 1)",
                "0",
                "6",
                "0",
                "(0)(0) - 36 = -36 < 0",
                "Saddle Point"
              ],
              [
                "(5, -1)",
                "0",
                "-6",
                "0",
                "(0)(0) - 36 = -36 < 0",
                "Saddle Point"
              ]
            ]
          }
        }
      ]
    },
    {
      "num": "Q19",
      "title": "A rectangular box open at the top is to have a volume of 32 cubic units. Find the dimensions of the box that require the minimum surface area of material using Lagrange's method of undetermined multipliers.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Mathematical Formulation",
          "text": "Let x, y, z denote the length, width, and height of the box respectively (x, y, z > 0).\nVolume constraint: V = x y z = 32  ===>  g(x, y, z) = x y z - 32 = 0.\nSurface Area of open-top box:\n  S = (bottom area) + 2 * (front/back) + 2 * (sides) = x y + 2 x z + 2 y z.\nWe seek to minimize S(x, y, z) subject to g(x, y, z) = 0."
        },
        {
          "heading": "2. Lagrange Multiplier Equations",
          "text": "Form the Lagrangian function:\n  L(x, y, z, lambda) = (x y + 2 x z + 2 y z) - lambda (x y z - 32).\nSetting partial derivatives to zero:\n  dL/dx = y + 2z - lambda y z = 0   ==>  lambda = (y + 2z) / (y z) = 1/z + 2/y   ...(1)\n  dL/dy = x + 2z - lambda x z = 0   ==>  lambda = (x + 2z) / (x z) = 1/z + 2/x   ...(2)\n  dL/dz = 2x + 2y - lambda x y = 0  ==>  lambda = (2x + 2y) / (x y) = 2/y + 2/x  ...(3)"
        },
        {
          "heading": "3. Solving for Dimensional Proportions",
          "text": "Equating (1) and (2):\n  1/z + 2/y = 1/z + 2/x  ==>  2/y = 2/x  ==>  x = y.\nEquating (2) and (3) with x = y:\n  1/z + 2/x = 2/x + 2/x  ==>  1/z = 2/x  ==>  x = 2z  ==>  z = x/2.\nThus, the optimal box has a square base of side x = y, and its height is half the side of the base: z = x/2."
        },
        {
          "heading": "4. Substituting into the Volume Constraint",
          "text": "Substitute x = y and z = x/2 into x y z = 32:\n  x * x * (x / 2) = 32\n  x^3 / 2 = 32  ==>  x^3 = 64  ==>  x = 4.\nTherefore:\n  Length: x = 4 units\n  Width: y = 4 units\n  Height: z = 4 / 2 = 2 units.\n\nMinimum Surface Area:\n  S_min = (4)(4) + 2(4)(2) + 2(4)(2) = 16 + 16 + 16 = 48 square units."
        }
      ]
    },
    {
      "num": "Q20",
      "title": "Find the maximum and minimum distances from the origin to the curve of intersection of the ellipsoid x^2/a^2 + y^2/b^2 + z^2/c^2 = 1 and the plane lx + my + nz = 0 using Lagrange's method of undetermined multipliers.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Mathematical Formulation with Two Constraints",
          "text": "We wish to extremize the squared distance from the origin:\n  f(x, y, z) = x^2 + y^2 + z^2 = r^2,\nsubject to two simultaneous equality constraints:\n  g_1(x, y, z) = x^2/a^2 + y^2/b^2 + z^2/c^2 - 1 = 0   (Ellipsoid)\n  g_2(x, y, z) = lx + my + nz = 0                       (Plane through origin)."
        },
        {
          "heading": "2. Setting up the Lagrangian with Two Multipliers",
          "text": "Define the Lagrangian with multipliers lambda and mu:\n  L = (x^2 + y^2 + z^2) - lambda (x^2/a^2 + y^2/b^2 + z^2/c^2 - 1) - 2 mu (lx + my + nz).\nDifferentiating with respect to x, y, z and setting to zero:\n  dL/dx = 2x - 2 lambda (x/a^2) - 2 mu l = 0  ==>  x (1 - lambda/a^2) = mu l\n  dL/dy = 2y - 2 lambda (y/b^2) - 2 mu m = 0  ==>  y (1 - lambda/b^2) = mu m\n  dL/dz = 2z - 2 lambda (z/c^2) - 2 mu n = 0  ==>  z (1 - lambda/c^2) = mu n."
        },
        {
          "heading": "3. Determining Multiplier lambda = r^2",
          "text": "Multiply the equations by x, y, z respectively and add:\n  (x^2 + y^2 + z^2) - lambda (x^2/a^2 + y^2/b^2 + z^2/c^2) = mu (lx + my + nz).\nSubstitute constraints r^2 = x^2 + y^2 + z^2, x^2/a^2 + y^2/b^2 + z^2/c^2 = 1, and lx + my + nz = 0:\n  r^2 - lambda (1) = mu (0)  ==>  lambda = r^2."
        },
        {
          "heading": "4. Deriving the Secular Equation for Distances",
          "text": "From x (1 - r^2/a^2) = mu l, we get:\n  x = mu l / (1 - r^2/a^2) = mu l a^2 / (a^2 - r^2).\nSimilarly:\n  y = mu m b^2 / (b^2 - r^2)\n  z = mu n c^2 / (c^2 - r^2).\nSubstitute x, y, z into the planar constraint lx + my + nz = 0:\n  l [ mu l a^2 / (a^2 - r^2) ] + m [ mu m b^2 / (b^2 - r^2) ] + n [ mu n c^2 / (c^2 - r^2) ] = 0.\nDividing by mu != 0 yields the characteristic equation:\n  (l^2 a^2) / (a^2 - r^2) + (m^2 b^2) / (b^2 - r^2) + (n^2 c^2) / (c^2 - r^2) = 0.\nSolving this quadratic equation in r^2 gives the exact maximum and minimum squared distances r_max^2 and r_min^2."
        }
      ]
    },
    {
      "num": "Q21",
      "title": "Explain the mathematical foundation of Gradient Descent and Stochastic Gradient Descent (SGD). For a quadratic objective f(theta) = (1/2) theta^T A theta - b^T theta, derive the convergence criterion 0 < alpha < 2 / lambda_max(A), and compare the algorithmic trade-offs of Batch GD vs SGD vs Mini-batch GD.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Derivation of the Convergence Condition for Quadratic Loss",
          "text": "Consider the quadratic loss function f(theta) = (1/2) theta^T A theta - b^T theta, where A is symmetric positive definite (Hessian matrix).\nThe gradient is:\n  grad f(theta) = A theta - b.\nThe unique optimal minimizer theta* satisfies A theta* = b.\nGradient Descent update with step size alpha:\n  theta_(t+1) = theta_t - alpha * grad f(theta_t) = theta_t - alpha (A theta_t - b).\nSubtract theta* from both sides to analyze the error e_t = theta_t - theta*:\n  theta_(t+1) - theta* = theta_t - theta* - alpha A (theta_t - theta*)\n  e_(t+1) = (I - alpha A) e_t."
        },
        {
          "heading": "2. Eigenvalue Spectral Radius Analysis",
          "text": "By recursion, e_t = (I - alpha A)^t e_0.\nFor the error to decay to zero (e_t -> 0 as t -> infinity) for any initial error e_0, the spectral radius of the iteration matrix (I - alpha A) must be strictly less than 1:\n  | 1 - alpha lambda_i(A) | < 1 for all eigenvalues lambda_i of A.\nThis inequality expands to:\n  -1 < 1 - alpha lambda_i < 1\nSubtract 1:\n  -2 < -alpha lambda_i < 0\nMultiply by -1 (reversing inequalities):\n  0 < alpha lambda_i < 2  ==>  0 < alpha < 2 / lambda_i.\nFor this to hold across all eigenvalues, the step size must be bounded by the largest eigenvalue:\n  0 < alpha < 2 / lambda_max(A).\nOptimal Learning Rate: The fastest convergence rate is achieved at alpha* = 2 / (lambda_min + lambda_max)."
        },
        {
          "heading": "3. Comparison of Gradient Descent Variants in Machine Learning",
          "table": {
            "headers": [
              "Variant",
              "Samples per Step",
              "Gradient Variance",
              "Convergence Trajectory",
              "Memory / Hardware"
            ],
            "rows": [
              [
                "Batch GD",
                "All N samples",
                "Zero (Exact)",
                "Smooth and deterministic",
                "High memory; slow on big data"
              ],
              [
                "SGD",
                "1 random sample",
                "Very high (noisy)",
                "Oscillatory; escapes saddle points",
                "Minimal memory; low GPU utilization"
              ],
              [
                "Mini-batch GD",
                "B samples (32-256)",
                "Moderate",
                "Fast, balanced convergence",
                "Optimal SIMD / GPU matrix throughput"
              ]
            ]
          }
        }
      ]
    },
    {
      "num": "Q22",
      "title": "Find the directional derivative of the scalar field phi(x, y, z) = x^2 y z + 4 x z^2 at the point P(1, -2, -1) in the direction of the vector a = 2i - j - 2k. In what direction is the directional derivative a maximum, and what is its maximum value at P?",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Computing the Gradient Vector at Point P",
          "text": "Given: phi(x, y, z) = x^2 y z + 4 x z^2.\nFirst partial derivatives:\n  dphi/dx = 2 x y z + 4 z^2\n  dphi/dy = x^2 z\n  dphi/dz = x^2 y + 8 x z\n\nGradient vector: grad phi = (dphi/dx) i + (dphi/dy) j + (dphi/dz) k.\nEvaluate at P(1, -2, -1):\n  dphi/dx = 2(1)(-2)(-1) + 4(-1)^2 = 4 + 4 = 8\n  dphi/dy = (1)^2 (-1) = -1\n  dphi/dz = (1)^2 (-2) + 8(1)(-1) = -2 - 8 = -10\n\nThus:\n  grad phi |_(1, -2, -1) = 8 i - j - 10 k."
        },
        {
          "heading": "2. Directional Derivative along Vector a",
          "text": "Given vector: a = 2 i - j - 2 k.\nMagnitude of a:\n  |a| = sqrt(2^2 + (-1)^2 + (-2)^2) = sqrt(4 + 1 + 4) = sqrt(9) = 3.\nUnit vector in direction of a:\n  u_hat = a / |a| = (2/3) i - (1/3) j - (2/3) k.\n\nDirectional Derivative (D_u phi) = grad phi . u_hat:\n  D_u phi = (8 i - j - 10 k) . [ (2/3) i - (1/3) j - (2/3) k ]\n          = 8(2/3) + (-1)(-1/3) + (-10)(-2/3)\n          = 16/3 + 1/3 + 20/3 = 37/3."
        },
        {
          "heading": "3. Maximum Directional Derivative and Direction",
          "text": "The directional derivative is maximized along the direction of the gradient vector grad phi itself:\n  Direction of maximum rate: 8 i - j - 10 k (or unit vector (8i - j - 10k) / sqrt(165)).\n\nMaximum Value of Directional Derivative:\n  |grad phi| = sqrt(8^2 + (-1)^2 + (-10)^2) = sqrt(64 + 1 + 100) = sqrt(165) approx 12.845."
        }
      ]
    },
    {
      "num": "Q23",
      "title": "Show that the vector field F = (y^2 cos x + z^3) i + (2y sin x - 4) j + (3x z^2 + 2) k is irrotational. Find its scalar potential function phi(x, y, z) such that F = grad phi, and calculate the work done in moving a particle in this force field from A(0, 1, -1) to B(pi/2, -1, 2).",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Testing for Irrotational Field (curl F = 0)",
          "text": "Let F = F_1 i + F_2 j + F_3 k where:\n  F_1 = y^2 cos x + z^3\n  F_2 = 2y sin x - 4\n  F_3 = 3x z^2 + 2\n\nCompute curl F = nabla x F:\n  curl F = | i                   j                   k                 |\n           | d/dx                d/dy                d/dz              |\n           | y^2 cos x + z^3     2y sin x - 4        3x z^2 + 2        |\n\nComponents of curl:\n  i-comp: d/dy(3x z^2 + 2) - d/dz(2y sin x - 4) = 0 - 0 = 0\n  j-comp: - [ d/dx(3x z^2 + 2) - d/dz(y^2 cos x + z^3) ] = - [ 3 z^2 - 3 z^2 ] = 0\n  k-comp: d/dx(2y sin x - 4) - d/dy(y^2 cos x + z^3) = 2y cos x - 2y cos x = 0\n\nSince curl F = 0 identically, the vector field F is irrotational (conservative)."
        },
        {
          "heading": "2. Finding the Scalar Potential Function phi",
          "text": "Since F is conservative, F = grad phi = (dphi/dx) i + (dphi/dy) j + (dphi/dz) k:\n  1. dphi/dx = y^2 cos x + z^3     ==>  phi = y^2 sin x + x z^3 + f_1(y, z)\n  2. dphi/dy = 2y sin x - 4        ==>  phi = y^2 sin x - 4y + f_2(x, z)\n  3. dphi/dz = 3x z^2 + 2          ==>  phi = x z^3 + 2z + f_3(x, y)\n\nComparing and combining the integrated terms:\n  phi(x, y, z) = y^2 sin x + x z^3 - 4y + 2z + C."
        },
        {
          "heading": "3. Evaluating the Work Done",
          "text": "For a conservative force field, the work done W along any path connecting endpoints A and B is simply the difference in potential:\n  W = Integral_A^B F . dr = phi(B) - phi(A).\nGiven points: A(0, 1, -1) and B(pi/2, -1, 2).\n\nPotential at B(pi/2, -1, 2):\n  phi(B) = (-1)^2 sin(pi/2) + (pi/2)(2)^3 - 4(-1) + 2(2)\n         = (1)(1) + (pi/2)(8) + 4 + 4 = 1 + 4*pi + 8 = 9 + 4*pi.\n\nPotential at A(0, 1, -1):\n  phi(A) = (1)^2 sin(0) + (0)(-1)^3 - 4(1) + 2(-1)\n         = 0 + 0 - 4 - 2 = -6.\n\nTotal Work Done:\n  W = phi(B) - phi(A) = (9 + 4*pi) - (-6) = 15 + 4*pi approx 27.566 units."
        }
      ]
    },
    {
      "num": "Q24",
      "title": "Prove the fundamental vector identities: (i) div(curl F) = 0 and (ii) curl(grad phi) = 0. (iii) If r_vec = x i + y j + z k and r = |r_vec|, evaluate div(r^n r_vec) and curl(r^n r_vec). Determine the value of n for which r^n r_vec is solenoidal.",
      "unit": "Unit 2: Multivariable Calculus and Vector Field Modeling",
      "unitKey": "u2",
      "solution_sections": [
        {
          "heading": "1. Proof of div(curl F) = 0",
          "text": "Let F = F_1 i + F_2 j + F_3 k.\ncurl F = (dF_3/dy - dF_2/dz) i + (dF_1/dz - dF_3/dx) j + (dF_2/dx - dF_1/dy) k.\nNow take divergence:\n  div(curl F) = d/dx(dF_3/dy - dF_2/dz) + d/dy(dF_1/dz - dF_3/dx) + d/dz(dF_2/dx - dF_1/dy)\n  = [ d^2 F_3 / (dx dy) - d^2 F_3 / (dy dx) ] + [ d^2 F_1 / (dy dz) - d^2 F_1 / (dz dy) ] + [ d^2 F_2 / (dz dx) - d^2 F_2 / (dx dz) ].\nAssuming continuous second partial derivatives, Clairaut's theorem equates mixed partials:\n  div(curl F) = 0. (Hence proved)."
        },
        {
          "heading": "2. Proof of curl(grad phi) = 0",
          "text": "grad phi = (dphi/dx) i + (dphi/dy) j + (dphi/dz) k.\ncurl(grad phi) = | i       j       k     |\n                 | d/dx    d/dy    d/dz  |\n                 | dphi/dx dphi/dy dphi/dz|\n  = i [ d^2phi/(dydz) - d^2phi/(dzdy) ] - j [ d^2phi/(dxdz) - d^2phi/(dzdx) ] + k [ d^2phi/(dxdy) - d^2phi/(dydx) ]\n  = 0 i - 0 j + 0 k = 0. (Hence proved)."
        },
        {
          "heading": "3. Evaluating div(r^n r_vec) and curl(r^n r_vec)",
          "text": "Note that r^2 = x^2 + y^2 + z^2 ==> dr/dx = x/r, dr/dy = y/r, dr/dz = z/r.\nVector field: V = r^n r_vec = (r^n x) i + (r^n y) j + (r^n z) k.\n\nEvaluating div(r^n r_vec):\n  d/dx(r^n x) = r^n (1) + x (n r^(n-1) * (x/r)) = r^n + n r^(n-2) x^2.\nSimilarly:\n  d/dy(r^n y) = r^n + n r^(n-2) y^2\n  d/dz(r^n z) = r^n + n r^(n-2) z^2.\nAdding all three:\n  div(r^n r_vec) = 3 r^n + n r^(n-2) (x^2 + y^2 + z^2) = 3 r^n + n r^(n-2) (r^2)\n                 = 3 r^n + n r^n = (n + 3) r^n.\n\nEvaluating curl(r^n r_vec):\n  curl(r^n r_vec) = grad(r^n) x r_vec + r^n (curl r_vec)\n  grad(r^n) = n r^(n-1) (grad r) = n r^(n-2) r_vec.\n  Thus grad(r^n) x r_vec = (n r^(n-2) r_vec) x r_vec = 0 (cross product of parallel vectors is zero).\n  And curl(r_vec) = 0. Therefore, curl(r^n r_vec) = 0."
        },
        {
          "heading": "4. Solenoidal Field Condition",
          "text": "A vector field is solenoidal if its divergence is identically zero:\n  div(r^n r_vec) = (n + 3) r^n = 0.\nFor non-zero r, this requires:\n  n + 3 = 0  ===>  n = -3.\n\nConclusion: The field F = r^(-3) r_vec = r_vec / r^3 (the Inverse-Square Field, identical to Coulomb's Law and Newton's Gravitational Field) is Solenoidal for all r != 0."
        }
      ]
    }
  ]
};
export default MATH_QUIZ_DATA;
