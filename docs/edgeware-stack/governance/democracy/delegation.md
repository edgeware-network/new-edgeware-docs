# Delegation

If you are too busy to keep up and vote on upcoming referenda, there is an option to delegate your vote to a Representative you trust as your spokesperson. When you delegate, your Representative ‘s account gets added your voting power, based on the amount of conviction you set.

The conviction for delegation works just like the conviction for regular voting. except your tokens may be locked longer than they would normally since the locking period resets when you undelegate your vote.

Your Representative to does not make any special action once the delegation is in place. They can continue to vote on referenda how they see fit. The difference is now when the Democracy system tallies votes, your delegated tokens now are added to the vote your Representative decision.

To delegate your vote to another account and to set the "Conviction". Navigate to the "Governance" tab and choose "Delegation". Your delegation will be assigned to your Representative until you explicitly undelegate your vote.

[Delegation on edgeware.app](https://edgeware.app/#/delegation)

**Note:** that you can delegate to only one account at a time.

1. First input _"delegating account"_ (an account you control, that you want to use to delegate.)
2. In the second input _"your representative"_ (your trusted spokesperson.)
3. Third input put in the _amount_ you want to delegate.
4. Fourth input your _conviction._ (remember, higher convictions **means** that your vote will be locked longer.)

![delegation](/img/delegate.png)

After you send the delegate transaction, You should see an icon beside the account you used like this. You can also click on the icon to edit your delegation.

![delegation](/img/delegations.png)

Alternatively you can verify it went through by navigating to the "Chain State" tab and selecting the "democracy" and "votingOf(Accountid): Voting" options. You will see an output similar to below, showing the addresses to which you have delegated your voting power.

![delegation](/img/chain-state.png)

## Undelegate

Once your vote has been undelegated, you’re in control of your voting power again. You can start to vote directly, or chose a different account to act as your representative. In this case, your tokens will be locked for the amount of time in accordance with the conviction you set at the beginning of the delegation. For example, if you chose "2x" delegation (four weeks lock up time), your tokens will be locked for 4 weeks after sending the `undelegate` transaction.
