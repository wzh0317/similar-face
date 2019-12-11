# Similar Face - CS445 Final Project

## Dependencies

```
conda create -n similarface python=3.7
conda activate similarface
conda install pytorch torchvision -c pytorch
conda install jupyter matplotlib seaborn scikit-learn
```

## Credits

Project idea came from the CS445 lecture "Understanding faces".  
Implementation idea came from the deeplearning.ai course about face recognition (https://www.youtube.com/watch?v=-FfMVnwXrZ0)

## Difficulties encountered

- Luckily we found the deeplearning.ai course that taught us how to implement the so called Siamese network and the triplet loss function to accomplish face recognition task, so we were going smoothly at the beginning.
- Our work started with building a super simple 3 layer CNN and a custom dataset with 22 identities and 10 images per identity. The training loss converge to very low value quickly, and we were able to retrieve the similar faces given a specified training example.
- Then the problem occur, we realize the model can work on the training dataset only because the model overfitted. We sought for ways to resolve the problem.
- As the CA/TA suggested, we decided to use the CelebA dataset instead of our custom dataset. CelebA contains a large amount of face images such that our network won't overfit easily.
- We also realized our initial network is too simple (with too few parameters) to be expressive enough, so we decided to use the ResNet architecture.

## Results

TODO
