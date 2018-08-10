var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(chocolateBars[],element)
{
  const arr = [element,...chocolateBars]
  return arr
}

function destructivelyAddElementToBeginningOfArray(chocolateBars[],element)
{
  chocolateBars.unshift(element)
}
function addElementToEndOfArray(chocolateBars[],element)
{
  const arr = [...chocolateBars,element]
  return arr
}
function removeElementFrom

function destructivelyAddElementToBeginningOfArray(chocolateBars,element)
{
  chocolateBars.push(element)
}