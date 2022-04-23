// for(var i=0;i<=10;i++)
// {
//     console.log(`i is ${i}`);
//     for(var j=0;j<4;j++)
//     {
//         console.log(`   j is ${j}`);
//     }
// }

const seatingChart=[['Christan','Erick','Namita'],['ram','rama','raman'],['ramana','peter','john']];
for(var i=0;i<seatingChart.length;i++)
{
    console.log(`Row ${i+1}`);
    for(var j=0;j<seatingChart[i].length;j++)
    {
        console.log(seatingChart[i][j]);
    }
}