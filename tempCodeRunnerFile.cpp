#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

Node* createNode(int data)
{
    Node* newNode = new Node();
    newNode->data = data;
    newNode->left = newNode->right = nullptr;
    return newNode;
}

Node* insertNode(Node* root, int data)
{
    if (root == nullptr) { 
                           
        return createNode(data);
    }

    if (data < root->data) {
        root->left = insertNode(root->left, data);
    }
    else if (data > root->data) {
        root->right = insertNode(root->right, data);
    }

    return root;
}

void inorderTraversal(Node* root)
{
    if (root != nullptr) {
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

Node* searchNode(Node* root, int key)
{
    if (root == nullptr || root->data == key) {
        return root;
    }

    if (root->data < key) {
        return searchNode(root->right, key);
    }

    return searchNode(root->left, key);
}

Node* minValueNode(Node* node)
{
    Node* current = node;
    while (current && current->left != nullptr) {
        current = current->left;
    }
    return current;
}

Node* deleteNode(Node* root, int data)
{
    if (root == nullptr)
        return root;

    if (data < root->data) {
        root->left = deleteNode(root->left, data);
    }

    else if (data > root->data) {
        root->right = deleteNode(root->right, data);
    }

    else {
        if (root->left == nullptr) {
            Node* temp = root->right;
            delete root;
            return temp;
        }
        else if (root->right == nullptr) {
            Node* temp = root->left;
            delete root;
            return temp;
        }

        Node* temp = minValueNode(root->right);

        root->data = temp->data;

        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}

int main()
{

    Node* root = nullptr;
    root = insertNode(root, 27);
    root = insertNode(root, 14);
    root = insertNode(root, 35);
    root = insertNode(root, 10);
    root = insertNode(root, 19);
    root = insertNode(root, 31);
    root = insertNode(root, 42);

    cout << "Inorder traversal of the given Binary Search "
            "Tree is: ";
    inorderTraversal(root);
    cout << endl;

    root = deleteNode(root, 31);
    cout << "After deletion of 31: ";
    inorderTraversal(root);
    cout << endl;

    root = insertNode(root, 25);
    cout << "After insertion of 25: ";
    inorderTraversal(root);
    cout << endl;

    // Search a key in BST
    Node* found = searchNode(root, 13);

    // check if the key is found or not
    if (found != nullptr) {
        cout << "Node 13 found in the BST." << endl;
    }
    else {
        cout << "Node 13 not found in the BST." << endl;
    }

    return 0;
}


