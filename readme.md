# Similar Face - CS445 Final Project

## Dependencies

```
conda create -n similarface python=3.7
conda activate similarface
conda install pytorch torchvision -c pytorch
conda install jupyter matplotlib seaborn scikit-learn
```

## Files

- Result.ipynb: Show the final result
- main.ipynb: Our initial network trained with random triplet selection
- checkpoint: Our initial model parameters
- main2.ipynb: Implemented the improvements mentioned below
- checkpoint_online: Our improved model parameters
- filenames_embedding_50k: 50,000 filenames with embeddings object
- filenames_embedding_200k: 200,000 filenames with embeddings object
- data/: Our initial dataset used for training
- selfies/: Save you selfies here and open Result.ipynb to find out the celebrity looks like you

## Credits

- Project idea came from the CS445 lecture "Understanding faces".
- We used CelebA dataset for training (http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html)
- Implementation idea came from the deeplearning.ai course about face recognition (https://www.youtube.com/watch?v=-FfMVnwXrZ0)
- Improvement idea came from "Siamese and triplet learning with online pair/triplet mining"
  (https://github.com/adambielski/siamese-triplet)

## Difficulties encountered

- Luckily we found the deeplearning.ai course that taught us how to implement the so called Siamese network and the triplet loss function to accomplish face recognition task, so we were going smoothly at the beginning.
- Our work started with building a super simple 3 layer CNN and a custom dataset with 22 identities and 10 images per identity. The training loss converge to very low value quickly, and we were able to retrieve the similar faces given a specified training example.
- Then the problem occur, we realize the model can work on the training dataset only because the model overfitted. We sought for ways to resolve the problem.
- As the CA/TA suggested, we decided to use the CelebA dataset instead of our custom dataset. CelebA contains a large amount of face images such that our network won't overfit easily.
- We also realized our initial network is too simple (with too few parameters) to be expressive enough, so we decided to use the ResNet architecture.

## Improvements - Training more effectively

- Initially we select random triplet of images from the dataset to compute the triplet loss l(a, p, n). This turned out to be a very ineffective way of training. Online triplet selection suggests that we should compute a batch of embeddings at one time, say 15 identities and 10 images per identity. From the 150 images, we can form 150 x 9 x 140 = 189,000 triplets to be used for training.
- Another interesting improvement we made is the so called "hard negative selection". Given a batch of embeddings, we choose for each (anchor, positive) pair a random hard negative image to form a triplet. By random hard negative it means choose a negative image such that the triplet loss is positive. By this way the network is trained better and faster.

## Results

TODO
