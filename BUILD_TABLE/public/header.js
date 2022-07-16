class Header{

    constructor(students) {
        this.table_header = new Set();
        this.student = students;
        this.message = "START PROGRAM <br> ";
    }

    get table_header(){
        return this.table_header;
    }

    get message() {
        return this.message;
    }

    buildHeader(){

        //Getting the objects from the database.js student (Array of Objects)
        //Loop though th objects in the Array
        for( key in this.students){

            // Get key for each Object. Returns Arrays of keys
            var studentArray = Object.keys(this.students[key]);

            //Going though the Array of keys adding to the Set
            studentArray.forEach(element => {

                this.table_header.add(element);

            });
        }
    }

    toString(){
            //Outputting the Set
        for (item of this.table_header.values()){
            this.message = this.message +  item + "<br> ";
        }

        this.message = this.message +  "END PROGRAM <br> ";
    }




}