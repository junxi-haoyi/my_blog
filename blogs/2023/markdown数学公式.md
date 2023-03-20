---
title: markedown数学公式
date: 2023-3-13
cover: /images/elden1.jpg
tags:
 - markedown学习
categories:
 - markdown
sticky: false



---

::: tip markedown数学公式
:::
<!-- more -->

#  Markdown数学公式语法

##  1.行内式与独立式

```markdown
$x+y=1&#行内式

$$
x+y=1#独立式
$$
```

E.G.

$x+y=1$
$$
x+y=1
$$

##  2.上下标

```markdown
$$
x^2+y_1=x^{x_1+y^2} \\
x_1+y^2=2
$$
```

E.G.
$$
x^2+y_1=x^{x_1+y^2} \\
x_1+y^2=2
$$

##  3.括号

```markdown
$$
f(x,y)=x^2+y_2, x \epsilon[1,10] , y \epsilon \{1,2,3,4,5\}#大括号显示，因为大括号在语法内有明确含义，需要转义 \\

\left(\sqrt {1 \over 2}\right)#\left和\right是让括号变大 \\
\left.(\sqrt {1 \over 2}\right.) \\
(\sqrt {1 \over 2})
$$
```

E.G.
$$
f(x,y)=x^2+y_2, x \epsilon[1,10] , y \epsilon \{1,2,3,4,5\} \\
\left(\sqrt {1 \over 2}\right) \\
\left.(\sqrt {1 \over 2}\right.) \\
(\sqrt {1 \over 2})
$$

##  4.省略号

```markdown
$$
{1 \over n},{2 \over n},{3 \over n},\ldots,{{n-1} \over n},{n \over n} \\#底线省略
{1 \over n},{2 \over n},{3 \over n},\cdots,{{n-1} \over n},{n \over n} #中间省略
$$
```

E.G.
$$
{1 \over n},{2 \over n},{3 \over n},\ldots,{{n-1} \over n},{n \over n} \\
{1 \over n},{2 \over n},{3 \over n},\cdots,{{n-1} \over n},{n \over n}
$$


##  5.分数

```markdown
$$
\frac{1-x}{y+1} \\
x \over {x+1}
$$
```

E.G.
$$
\frac{1-x}{y+1} \\
x \over {x+1}
$$


##  6.开方

```markdown
$$
\sqrt[6]{2}
$$
```

E.G.
$$
\sqrt[6]{2}
$$

##  7.向量

```markdown
$$
\vec a \\
\vec {ab}
$$
```

E.G.
$$
\vec a \\
\vec {ab}
$$


##  8.极限

```markdown
$$
\lim_{n\rightarrow+\infty}\frac{1}{n}
$$
```

E.G.
$$
\lim_{n\rightarrow+\infty}\frac{1}{n}
$$

## 9.求导

```markdown
$$
y\prime = nx^{n-1} 
$$
```

E.G.
$$
y\prime = nx^{n-1}
$$

##  10.方程组

```markdown
$$
y:\begin{cases}x + y = 1\\
x - y = 0\end{cases}
$$
```

E.G.
$$
y:\begin{cases}x + y = 1\\
x - y = 0\end{cases}
$$


##  11.矩阵

```markdown
$$
A = \left[\begin{matrix}\\
1&2&3&4\\
5&6&7&8\\
9&10&11&12\\
\left{matrix}\right]
$$
```

E.G.
$$
A = \left[\begin{matrix}
1&2&3&4\\
5&6&7&8\\
9&10&11&12\\
\end{matrix}\right]
$$


##  12.对数符号

```markdown
$$
\log \\
\lg  \\
\ln	 \\
$$
```

E.G.
$$
\log \\
\lg  \\
\ln	 \\
$$


##  13.数学符号

```markdown
$$
1.\not =  \\\\
2.\approx  \\\\
3.\leq     \\\\
4.\geq    \\\\
5.\times	\\\\
6.\cdot	\\\\
7.\pm		\\\\
8.\div	\\\\
9.\infty	\\\\
10.\sum	\\\\
11.\prod	\\\\
12.\coprod \\\\
13.\uparrow \\\\
14.\downarrow \\\\
15.\leftarrow \\\\
16.\rightarrow \\\\
17.\overline{a+b+c} \\\\
$$
```

E.G.
$$
1.\not =  \\\\
2.\approx  \\\\
3.\leq     \\\\
4.\geq    \\\\
5.\times	\\\\
6.\cdot	\\\\
7.\pm		\\\\
8.\div	\\\\
9.\infty	\\\\
10.\sum	\\\\
11.\prod	\\\\
12.\coprod \\\\
13.\uparrow \\\\
14.\downarrow \\\\
15.\leftarrow \\\\
16.\rightarrow \\\\
17.\overline{a+b+c} \\\\
$$




##  14.定积分

```markdown
$$
\int \\\\
\iint \\\\
\iiint \\\\
\oint  \\\\

$$
```

E.G.
$$
\int \\\\
\iint \\\\
\iiint \\\\
\oint  \\\\
$$

##  15.三角函数

```markdown
$$
\bot \\
\angle \\
30^\circ \\
\sin  \\
\cos	\\
\tan	\\
\cot	\\
\sec	\\
\csc	
$$
```

E.G
$$
\bot \\
\angle \\
30^\circ \\
\sin  \\
\cos	\\
\tan	\\
\cot	\\
\sec	\\
\csc
$$


##  16.集合

```markdown
$$
\emptyset \\
\in		\\
\notin	\\
\supset  \\
\supseteq	\\
\bigcap		\\
\bigcup		\\
\bigvee		\\
\bigwedge	
$$
```

E.G.
$$
\emptyset \\
\in		\\
\notin	\\
\supset  \\
\supseteq	\\
\bigcap		\\
\bigcup		\\
\bigvee		\\
\bigwedge
$$

##  17.希腊字母

```markdown
$$
\alpha	\\
\beta	\\
\gamma	\\
\pi		
$$
```

E.G.
$$
\alpha	\\
\beta	\\
\gamma	\\
\pi	
$$



| 大写语法   | 小写语法        | 大写效果 | 小写效果      | 大写语法     | 小写语法     | 大写效果   | 小写效果   |
| ---------- | --------------- | -------- | ------------- | ------------ | ------------ | ---------- | ---------- |
| `$A$`      | `$alpha$`       | $A$      | $\alpha$      | `$I$`        | `$\iota$`    | $I$        | $\iota$    |
| `$B$`      | `$\beta$`       | $B$      | $\beta$       | `$K$`        | `$\kappa$`   | $K$        | $\kappa$   |
| `$\Gamma$` | `$\gamma$`      | $\Gamma$ | $\gamma$      | `$\Lambda$`  | `$\lambda$`  | $\Lambda$  | $\lambda$  |
| `$\Delta$` | `$\delta$`      | $\Delta$ | $\delta$      | `$M$`        | `$\mu$`      | $M$        | $\mu$      |
| `$E$`      | `$\varepsilon$` | $E$      | $\varepsilon$ | `$N$`        | `$\nu$`      | $N$        | $\nu$      |
| `$Z$`      | `$\zeta$`       | $Z$      | $\zeta$       | `$\Xi$`      | `$\xi$`      | $\Xi$      | $\xi$      |
| `$H$`      | `$\eta$`        | $H$      | $\eta$        | `$O$`        | `$o$`        | $O$        | $o$        |
| `$\Theta$` | `$\theta$`      | $\Theta$ | $\theta$      | `$\Pi$`      | `$\pi$`      | $\Pi$      | $\pi$      |
| `$P$`      | `$\rho$`        | $P$      | $\rho$        | `$T$`        | `$\tau$`     | $T$        | $\tau$     |
| `$\Sigma$` | `$\sigma$`      | $\Sigma$ | $\sigma$      | `$\Upsilon$` | `$\upsilon$` | $\Upsilon$ | $\upsilon$ |
| `$\Phi$`   | `$\phi$`        | $\Phi$   | $\phi$        | `$X$`        | `$\chi$`     | $X$        | $\chi$     |
| `$\Psi$`   | `$\psi$`        | $\Psi$   | $\psi$        | `$\Omega$`   | `$\omega$`   | $\Omega$   | $\omega$   |



