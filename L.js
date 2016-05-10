// 1.tree()函数：用来将parent树状结构转化为children树状结构，详见comps/tree.js

function tree(arr) {

    // 爬树，在tree(对象的数组)上面寻找id为leaf.id的节点，
    // 去掉leaf.parent属性再加入到该节点的children属性中
    function climb(tree, leaf) {
        for (var i = 0, len = tree.length; i < len; i ++) {
            if (tree[i].id == leaf.parent) {
                var hasChildren = tree[i].hasOwnProperty('children');
                if (!hasChildren) {
                    tree[i]['children'] = [];
                }
                var temp = {
                    id: leaf.id,
                    text: leaf.text
                }
                if (leaf.hasOwnProperty('children')) {
                    temp['children'] = leaf.children;
                }
                tree[i].children.push(temp);
                return i;
            } else if (hasChildren) {
                climb(tree[i].children, leaf);
            }
        };
    }

    // 遍历原始数组的每一个对象，有parent属性就去爬树
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i].hasOwnProperty('parent')) {
            climb(arr, arr[i]);
            arr.splice(i, 1);
            i --;
        }
    };

    return arr;
}