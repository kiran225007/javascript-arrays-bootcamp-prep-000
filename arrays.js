var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element)
{
  const arr = [element,...chocolateBars]
  return arr
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
 array.unshift(element)
}
function addElementToEndOfArray(array,element)
{
  const arr = [...chocolateBars,element]
  return arr
}
function removeElementFromEndOfArray(array)
{
  

}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  chocolateBars.push(element)
}