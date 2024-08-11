class TreeNode{
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode(){}
  TreeNode (int val){
    this.val=val;
  }
  TreeNode (int val,TreeNode left,TreeNode right){
    this.val=val;
    this.left=left;
    this.right=right;
  }
}
class Solution{
  public ArrayList<Integer> preOrder(TreeNode root){
    ArrayList<Integer>result=new linkedList<>();
    if(root==null){
      return A;
    }
    result.add(root.val);
    preOrder(root.left);
    preOrder(root.right);
    return result;
  }
}
TC=O(n),
SC=O(n)
