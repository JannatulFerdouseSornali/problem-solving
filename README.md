To make the city more pleasant, the municipality of Lund has decided to install light strips over the streets. The municipality prefers to have lighting in as many places as possible. There are many locations where light strips could be installed, and since the city council is busy, you have been asked to figure out where the light strips should be placed.

/problems/stadiljus/file/statement/en/img-0001.jpg
Light strips in Lund, used with permission
The streets in Lund vary in width, which means that the light strips will need to be custom ordered. It is possible to custom order light strips in lengths of whole meters, which cost 
 SEK per meter. To avoid appearing wasteful, the municipality demands that the average cost for each light strip ordered is at most 
 SEK per light strip.

The municipality has now provided you with a list of how long the light strips need to be in order to be installed in 
 different locations in the city. Can you help them set up as many as possible?

Input
The first line of the input contains the integer 
 (
), the number of spots where we might install a light strip.

The second line contains the integer 
 (
), the cost in SEK of buying one whole meter of light strip.

The third line contains the integer 
 (
), the highest average cost per light strip the municipality is willing to pay for.

Afterwards, there will be a line with 
 integers 
 (
), where 
 means that a light strip must be exactly 
 meters to illuminate the 
:th location.

Output
Print an integer: the largest number of locations that can be illuminated by light strips within the municipalitys budget.

Points
Your solution will be tested on several test case groups. To get the points for a group, it must pass all the test cases in the group.

Group

Point value

Constraints



 for all 



 or 
 for all 






No additional constraints.

Explanation of sample 1
It is possible to buy the first 3 light strips. The average cost will then be 
 
 SEK, which barely fits within the buget of at most 
 SEK per light strip on average.

Sample Input 1	Sample Output 1
4
3
9
2 3 4 5
3
