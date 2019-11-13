### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) # This method should be written in kebab case.
    if card.value = 1 # .value is not a method.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # typo: 'dif' should be 'def'.
  if card1.value > card2.value
    return card # card is undefined.
  else
    return card2
  end
end
end # Needs to be removed or the following code won't be read.

def self.cards_total(cards)
  total # total is undefined.
  for card in cards
    total += card.value # still no .value method.
    return "You have a total of" + total # total is undefined and there should be a space after the word of.
  end
end
```
