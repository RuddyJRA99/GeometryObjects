class Pyramid extends GObject{
    Size = {x: 50, y: 50, z: 50}
    constructor(){
        super()
        this.Vertices = [
            [0, 1, 0],
            [1, -1, -1],
            [1, -1, 1],
            [-1, -1, 1],
            [-1, -1, -1]
        ]
        this.Edges = [
            [1,2], [1,3], [1,4], [1,5],
            [2,3], [3,4], [4,5], [5,2]
        ]

        this.SetScale(100)
    }
}