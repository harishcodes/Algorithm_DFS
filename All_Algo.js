//Given a binary tree, determine if it is a valid binary search tree (BST).
//
//Assume a BST is defined as follows:
//
//The left subtree of a node contains only nodes with keys less than the node's key.
//The right subtree of a node contains only nodes with keys greater than the node's key.
//Both the left and right subtrees must also be binary search trees.
// 
//
//Example 1:
//
//    2
//   / \
//  1   3
//
//Input: [2,1,3]
//Output: true
//Example 2:
//
//    5
//   / \
//  1   4
//     / \
//    3   6
//
//Input: [5,1,4,null,null,3,6]
//Output: false
//Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    let res = validateBST(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,null)
    return res
    
};

function validateBST(node,min,max,val) {
    //console.log('entering',val,node)
    if (node == null) {
       // console.log('here',val,node)
      return true  
    } 
    
    if (node.val <= min || node.val >=max) return false
    let leftBool = validateBST(node.left,min,node.val,'L')
    let rightBool = validateBST(node.right,node.val,max,'R')
    
    if (leftBool && rightBool) {
        //console.log('here2',val,node)
        return true
    } else {
        //console.log('here1',val,node)
        return false
    }
    
}



**************************************************************************************************************************************************************************
                                                                            2. SAME TREE
**************************************************************************************************************************************************************************
                                                                                
//Given two binary trees, write a function to check if they are the same or not.
//
//Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//
//Example 1:
//
//Input:     1         1
//          / \       / \
//         2   3     2   3
//
//        [1,2,3],   [1,2,3]
//
//Output: true
//Example 2:
//
//Input:     1         1
//          /           \
//         2             2
//
//        [1,2],     [1,null,2]
//
//Output: false
//Example 3:
//
//Input:     1         1
//          / \       / \
//         2   1     1   2
//
//        [1,2,1],   [1,1,2]
//
//Output: false
                                                                                
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  //console.log(p.val,q.val)
  if (p==null && q==null) return true
  if (p==null || q== null) return false    
  if (p.val!==q.val) return false
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);    
}
                                                                            
**************************************************************************************************************************************************************************
                                                                            2. SYMMETRIC TREE
**************************************************************************************************************************************************************************

/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null){
        return true
    }
    
    return isSymmetricHelper(root.left,root.right)
};

function isSymmetricHelper(p,q) {
    if (p == null && q == null) return true
    if (p == null || q == null) return false
    if (p.val !== q.val) return false
    return isSymmetricHelper(p.left,q.right) && isSymmetricHelper(p.right,q.left)
}

**************************************************************************************************************************************************************************
                                                                            4. MAXIMUM DEPTH OF BINARY TREE
**************************************************************************************************************************************************************************
/*Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxVal = Number.MIN_SAFE_INTEGER
    if (root == null) return 0
    let max = helper(root,maxVal,0)
    return max
};

function helper(node,max,cnt) {
    
//console.log('here',node)
    if (node == null) {
        max = Math.max(max,cnt)
        console.log(max,cnt)
        return max
    }
    cnt ++
    let maxleft = helper(node.left,max,cnt)
    
    let maxright = helper(node.right,max,cnt)
    
    return Math.max(maxleft,maxright)
    
}

**************************************************************************************************************************************************************************
                                                                            5. construct-binary-tree-from-preorder-and-inorder-traversal
**************************************************************************************************************************************************************************
/*Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder==null || inorder==null || preorder.length == 0 || inorder.length == 0) return null
    //return helper(0,0,inorder.length-1,preorder,inorder)
    return helper1(preorder,inorder)
};

function helper(prest,inst,inend,pre,ino){
    if (prest>pre.length-1 || inst>inend) return null
    
    let brIdx=0
    let root = new TreeNode(pre[prest])
    for (let i=inst;i<=inend;i++){
        if (root.val===ino[i]){
            brIdx = i
            break
        }
    }
    
    root.left = helper(prest+1,inst,brIdx-1,pre,ino)
    root.right = helper(prest+brIdx-inst+1,brIdx+1,inend,pre,ino)
    return root
}

function helper1(preOrd,inOrd) {
    if (preOrd==null || inOrd==null || preOrd.length == 0 || inOrd.length == 0) return null
    let root = new TreeNode(preOrd[0])
    //if (preOrd.length === 1) return root
    
    let brIdx = 0
    for (let i=0;i<inOrd.length;i++){
        if (root.val===inOrd[i]){
            brIdx = i
            break
        }
    }    
    let leftPre = preOrd.slice(1,brIdx+1)
    let rightPre = preOrd.slice(brIdx+1,preOrd.length)
    let leftIn = inOrd.slice(0,brIdx)
    let rightIn = inOrd.slice(brIdx+1,inOrd.length)
    
    root.left = helper1(leftPre,leftIn)
    root.right = helper1(rightPre,rightIn)
    return root
}

**************************************************************************************************************************************************************************
                                                                            6. construct-binary-tree-from-inorder-and-postorder-traversal
**************************************************************************************************************************************************************************
/*Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    
    return helper(inorder,postorder)
    
};

function helper(inOrd,postOrd) {
    
    if (inOrd == null || postOrd == null || inOrd.length == 0 || postOrd.length == 0) return null
    
    let root = new TreeNode(postOrd[postOrd.length-1])
    let idx = 0
    for (let i=0;i<inOrd.length;i++){
        if (root.val === inOrd[i]) {
            idx = i
            break
        }
    }
    
    let leftPost = postOrd.slice(0,idx)
    let rightPost = postOrd.slice(idx,postOrd.length-1)
    let leftIn = inOrd.slice(0,idx)
    let rightIn = inOrd.slice(idx+1,inOrd.length)
    
    root.left = helper(leftIn,leftPost)
    root.right = helper(rightIn,rightPost)
    return root
}

**************************************************************************************************************************************************************************
                                                                            7. Convert Sorted Array to Binary Search Tree
**************************************************************************************************************************************************************************
/*Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return helper(nums,0,nums.length)
    
};


function helper(nums,low,high) {
    
    if (low>=high) return null
    
    let mid = Math.floor((low+high)/2)
    let root = new TreeNode(nums[mid])
    root.left = helper(nums,low,mid)
    root.right = helper(nums,mid+1,high)
    return root
}

**************************************************************************************************************************************************************************
                                                                            8. Convert Sorted List to Binary Search Tree
**************************************************************************************************************************************************************************
/*Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
    let arr=[]
    
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    
    return ListToBin(arr)
};

function ListToBin(arr) {
    if (arr.length <=0 || arr == null) return null
    let mid = Math.floor(arr.length/2)
    let node = new TreeNode(arr[mid])
    node.left = ListToBin(arr.slice(0,mid))
    node.right = ListToBin(arr.slice(mid+1,arr.length))
    return node
}

**************************************************************************************************************************************************************************
                                                                            9. Balanced Binary Tree
**************************************************************************************************************************************************************************
/*Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.*/
                                                                                
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let bool = true
    
    if (helper(root) <= -1) {
        
        return false
    }
    else {
        return true
    }
    
    
};


function helper(root) {
    
    if (root == null) return 0
    

    let leftCnt =  1+ helper(root.left) 
    let rightCnt = 1+ helper(root.right)
    
    
    if ((leftCnt-rightCnt < -1) || (leftCnt-rightCnt > 1)) {
        console.log('here')
        return -10
    } 
    
    return Math.max(leftCnt,rightCnt)
}

**************************************************************************************************************************************************************************
                                                                            9. Minimum Depth of Binary Tree
**************************************************************************************************************************************************************************
/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    
    return BFSSolution(root)
};

function BFSSolution(root) {
    
    let minDepth = 1
    if (root == null) return 0
    
    if (root.left == null && root.right == null) return minDepth
    
    let queue = [root]
    
    while (queue.length > 0){
        
        let queueLen = queue.length
        
        for (let i=0;i<queueLen;i++) {
            let node = queue.shift()
            if (node.left == null && node.right == null) {
                return minDepth
            } else {
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
        }
        minDepth++
    }
    
    return minDepth

    
}

**************************************************************************************************************************************************************************
                                                                            9. Path Sum
**************************************************************************************************************************************************************************
/*Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
    if (helper(root,sum,0)) {
        return true
    } else {
        return false
    }
};

function helper(root,sum,rollSum) {
    if (!root) {
        console.log('HHHHH')
        return false
    }
        
    rollSum += root.val
    console.log(rollSum) 
    if (root.left == null && root.right == null && rollSum === sum) {
        console.log('here True',rollSum)
        return true
    }    
    let bool1=helper(root.left,sum,rollSum)
    let bool2=helper(root.right,sum,rollSum)
    if (bool1 || bool2) return true
    

}

**************************************************************************************************************************************************************************
                                                                            9. Path Sum II
**************************************************************************************************************************************************************************
/*Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]*/
                                                                                
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    let arrRes = helper(root,sum,0,[],[])
    if (root == null) return []
    return arrRes
};

function helper(root,sum,rS,arr,innerArr) {
    
    if (!root) return
        
    innerArr.push(root.val)
    rS+=root.val    
    if (root.left == null && root.right == null && rS==sum) {
        arr.push(innerArr.slice())           
    }
    
    helper(root.left,sum,rS,arr,innerArr)
    helper(root.right,sum,rS,arr,innerArr)
    innerArr.pop()
    return arr
}  

**************************************************************************************************************************************************************************
                                                                            9. Flatten Binary Tree to Linked List
**************************************************************************************************************************************************************************
/*Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    root = helper(root,null)
};

function helper(root,prev) {
        if (root == null) {
            return prev;
        }
        prev = helper(root.right, prev);
        prev = helper(root.left, prev);
        root.right = prev;
        root.left = null;
        prev = root;
        return root;
          
}

**************************************************************************************************************************************************************************
                                                                            9. Populating Next Right Pointers in Each Node
**************************************************************************************************************************************************************************

/*You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 4096.
-1000 <= node.val <= 1000  */
                                                                                
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function(root) {
//     if (!root) return null
    
//     if (root.left) {
//         if (root.right){
//             root.left.next = root.right
//         }
//         if (root.next) {
//             root.right.next = root.next.left
//         }
//     }
    
//     connect(root.left)
//     connect(root.right)
    
//     return root
    

// };

var connect = function(root) {
    if(!root) return null;
    let queue = [root]
    
    while (queue.length > 0){
        
        let size = queue.length
        
        for (let i=0;i<size;i++) {
            let curNode = queue.shift()
            let next
            
            if(i >= size - 1) {
                next = null
            } else {
                next = queue[0];
            }
            
            curNode.next = next
            
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
            
        }
        
        
    }
    return root
};

**************************************************************************************************************************************************************************
                                                                            9. Populating Next Right Pointers in Each Node - II
**************************************************************************************************************************************************************************
/*Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100*/       

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    let queue = [root]
    
    while (queue.length > 0){
        
        let size = queue.length
        
        for (let i=0;i<size;i++) {
            let curNode = queue.shift()
            let next
            
            if(i >= size - 1) {
                next = null
            } else {
                next = queue[0];
            }
            
            curNode.next = next
            
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
            
        }
        
        
    }
    return root
};

**************************************************************************************************************************************************************************
                                                                            9.  Sum Root to Leaf Numbers
**************************************************************************************************************************************************************************
/*Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.*/
                                                                                
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    
    return helper(root,"",0)
    
};

function helper(root,s,sum) {
    
    if (!root) return 0
    s+=root.val
    if (root.left == null && root.right == null) {
        sum+=Number(s)
        return sum
    }
    let val1 = helper(root.left,s,sum)
    let val2 = helper(root.right,s,sum)
    return val1+val2
}

**************************************************************************************************************************************************************************
                                                                            9.  Surrounded regions
**************************************************************************************************************************************************************************
/*Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically. */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] === 'O') {
                if (i==0 || j== 0 || i== board.length-1 || j== board[0].length-1) {
                    helper(board,i,j)    
                }                
            }
        }
    }
    
    
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O'
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    
};



function helper(board,i,j) {
    
    if (i < 0 || i >= board.length || j<0 || j >= board[0].length || board[i][j] !== 'O') return    
    board[i][j] = 'T'
    helper(board,i+1,j)
    helper(board,i-1,j)
    helper(board,i,j+1)
    helper(board,i,j-1)                 
}                                                                                