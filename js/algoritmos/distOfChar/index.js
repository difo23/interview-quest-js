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


function shortestDist(st, char) {

    let len = st.length - 1
    let [
        winLeftStart,
        winLeftEnd,
        winRightStart,
        winRightEnd
    ] = [0, 0, len, len];
    let [pivotLeft, pivotRight] = [null, null];
    let dist = [];

    while (winLeftEnd <= len) {

        // window Left
        if (st[winLeftEnd] === char) {

            pivotLeft = winLeftEnd;
            while (winLeftStart <= pivotLeft) {
                dist[winLeftStart] = pivotLeft - winLeftStart;
                ++winLeftStart;

            }

        } if (!!pivotLeft) {

            if (dist[winLeftEnd]) {
                //End when have frist match in dist
                dist[winLeftEnd] =
                    dist[winLeftEnd] < winLeftEnd - pivotLeft ?
                        dist[winLeftEnd] :
                        winLeftEnd - pivotLeft;
                return dist;
            }

            dist[winLeftEnd] = winLeftEnd - pivotLeft;
        }


        // Window right
        if (st[winRightEnd] === char) {

            pivotRight = winRightEnd;
            while (winRightStart >= pivotRight) {

                dist[winRightStart] = winRightStart - pivotRight;
                --winRightStart;
            }

        } else if (!!pivotRight) {

            dist[winRightEnd] = pivotRight - winRightEnd;
        }

        // New pointers 
        --winRightEnd;
        ++winLeftEnd;
        

    }

}

console.log(shortestDist('helloworld', 'l'))