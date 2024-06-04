class GObject{
    Rotation = {x: 0, y: 0, z: 0}
    Position = {x: 0, y: 0, z: 0}
    Vertices = []
    Edges = []
    Scale = 100

    SetRotation(angles){
        this.Rotation = angles
        this.Rotate()
    }

    SetScale(scale){
        this.Scale = scale
        this.Scalar()
    }

    GetFigure(){
        return this.Edges.map(edge => edge.map(index => this.Vertices[index - 1]))
    }

    Scalar(){
        this.Vertices = this.Vertices.map(vertix => { 
            return vertix.map(i => i * this.Scale)
        })
    }

    Rotate(){
        this.Vertices = this.Vertices.map(vertix => this._rotatePoint(vertix))
    }

    _rotatePoint(point){
        const [x, y, z] = point

        const angleX = this._radians(this.Rotation.x)
        const angleY = this._radians(this.Rotation.y)
        const angleZ = this._radians(this.Rotation.z)
        
        let cosX = Math.cos(angleX)
        let sinX = Math.sin(angleX)
        let cosY = Math.cos(angleY)
        let sinY = Math.sin(angleY)
        let cosZ = Math.cos(angleZ)
        let sinZ = Math.sin(angleZ)
        
        let x1 = x
        let y1 = cosX * y - sinX * z
        let z1 = sinX * y + cosX * z
    
        let x2 = cosY * x1 + sinY * z1
        let y2 = y1
        let z2 = -sinY * x1 + cosY * z1
    
        let x3 = cosZ * x2 - sinZ * y2
        let y3 = sinZ * x2 + cosZ * y2
        let z3 = z2
    
        return [x3, y3, z3]
    }

    _radians(degrees)  {
        return degrees * (Math.PI / 180);
    }
}