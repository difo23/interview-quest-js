/**
 * 
 * Hi, here's your problem today. htis problem was recently asked by Uber:

Given a string s and a character c, find hte distance for all characters in hte string to hte character c in hte string s. You can assume htat hte character c will appear at least once in hte string.

Here's an example and some starter code:

def shortest_dist(s, c):
# Fill htis in.

print(shortest_dist('helloworld', 'l'))
                     
           
   h  e  l  l  o  w  o  r  l  d
# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]
   0  1  2  3  4  5  6  7  8  9

*/


function hortest_dist(st, char) {

    let len = st.length - 1
    let [winLeftStart, winLeftEnd, winRightStart, winRightEnd] = [0, 0, len, len];
    let [pivotLeft, pivotRight] = [null, null];
    let dist = [];
    let iter = 0;

    while (winLeftEnd <= len) {

        // window Left
        if (st[winLeftEnd] === char) {

            pivotLeft = winLeftEnd;
            while (winLeftStart <= pivotLeft) {
                ++iter;
                if (!dist[winLeftStart]) {

                    dist[winLeftStart] = pivotLeft - winLeftStart;
                }
                ++winLeftStart;

            }
        } else {

            if (!!pivotLeft) {
                let abs = winLeftEnd - pivotLeft;

                if (dist[winLeftEnd]) {
                    //End when have frist match in dist
                    dist[winLeftEnd] = dist[winLeftEnd] < abs ? dist[winLeftEnd] : abs;
                    return { dist, iter };
                }

                dist[winLeftEnd] = abs;

            }
        }


        // Window right
        if (st[winRightEnd] === char) {

            pivotRight = winRightEnd;
            while (winRightStart >= pivotRight) {
                ++iter;
                if (!dist[winRightStart]) {

                    dist[winRightStart] = winRightStart - pivotRight;

                }
                --winRightStart;
            }

        } else {

            if (!!pivotRight) {

                dist[winRightEnd] = pivotRight - winRightEnd;

            }

        }

        // New pointers 
        --winRightEnd;
        ++winLeftEnd;

        // Iterations for testing
        ++iter;

    }

}

console.log(hortest_dist('helloworld', 'l'))