---
title: Agile Explained Through Code
description: Agile methodologies can closely resemble open/closed principles used in the development realm...
shareUrl: https://twitter.com/intent/tweet?url=https%3A%2F%2Fguillaumecle.me%2Fblog%2F2020-11-26-agile-explained-through-code.html&via=GuillaumeCleme&text=I%20just%20read%20a%20post%20explaining%20agile%20using%20code&hashtags=agile%2Cscrum%2Ccode%2Cdev
cover: https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1641&q=80
createdAt: 2020/11/26
---

# Agile Explained Through Code
Agile is a concept that is very popular in the development community. Most developers either swear by it or completely hate it. Why is that? I like to think that there are a lot of advantages to working with an agile mindset but it is certainly not a silver bullet. Although most developers say that they "have worked with Agile" they most often have only worked with Scrum which is only a prevalent implementation of an Agile methodology. Unlike certain Agile methodologies, the Agile Manifesto actually only prescribes a few key principles which can be found [here](https://agilemanifesto.org/principles.html).

Terms such a Sprints, Backlog, Stand-up Meetings are actually all Scrum terms but there exists a number of different Agile methodologies. In fact, those methodologies are only examples of how Agile can be used to achieve greater efficiency. Those methodologies are essentially templates that in most cases have to be fine tuned to your environment, industry, and processes. The only official event that Agile prescribes is the retrospective. Retrospectives give you an opportunity to reflect on what worked well, what didn't, and what you can do to change it. By implementing some changes and measuring their effectiveness you can adapt Agile processes to your team’s needs.

I like to think of Agile as an open/closed principle. For developers, I will use (Java) code samples to explain.

Think of Agile as an interface such as the following:

```java
public interface Agile {
    
    public void collaborate(Team team);

    public Work getWork(List<Requirement> requirements);
    
    public Release deliver(Work work);

    public Progress getProgress(Work work);

    public Adjustments retrospective(Reflection reflection);
}
```

It includes a few implementable methods that must be implemented by whichever class you choose, but the rest remains malleable.

Methodologies such as Scrum and Kanban implement Agile principles the same way a class would. Their implementations is also typically much more detailed:

```java
public class Scrum implements Agile {

    public Sprint createSprint(Goal goal, Work work){
        return new Sprint(goal, work);
    }

    @Override
    public void collaborate(Team team) {
        ScrumTeam scrumTeam = (ScrumTeam) team;

        DailyScrum scrum = new DailyScrum(scrumTeam);
        scrum.host();

        Sprint sprint = createSprint(new Goal("To deliver value!"), 
                            getWork(scrumTeam.getProductOwner().getRequirements()));
        sprint.plan();
        sprint.workOn();
    }

    @Override
    public Work getWork(List<Requirement> requirements) {
        requirements.sort(Priority.HIGH_PRIORITY_ORDER);
        return new Work(requirements);
    }

    @Override
    public Release deliver(Work work) {
        return work.deliver();
    }

    @Override
    public Progress getProgress(Work work) {
        return work.getCompletedWork();
    }

    @Override
    public Adjustments retrospective(Reflection reflection) {
        Adjustments adjustments = new Adjustments();
        adjustments.add(reflection.getWhatWorkedWell());
        adjustments.add(reflection.getWhatDidntWorkWell());
        adjustments.add(reflection.getFutureSprintCommitment());
        return adjustments;
    }
}
```

If you and your team choose to implement one of these methodologies, you will start by using all of the "features" implemented by this class. Little by little though, after each retrospective event, you will have to adapt certain processes to your business and needs. This may leave you with an implementation like the following, and that is exactly what you want:

```java
public class YourScrum extends Scrum {

    @Override
    public void collaborate(Team team) {
        ScrumTeam scrumTeam = (ScrumTeam) team;

        DailyScrum scrum = new DailyScrum(scrumTeam);
        scrum.host();

        //Make it your own!
        YourOwnProcess yourOwnProcess = new YourOwnProcess();
        yourOwnProcess.implement();

        Sprint sprint = super.createSprint(new Goal("To deliver value!"), 
                                getWork(scrumTeam.getProductOwner().getRequirements()));
        sprint.plan();
        sprint.workOn();
    }
}
```

In short, Scrum is not Agile. Agile is a set of guiding principles that are meant to allow for continuous improvement. Make it your own and stick to it!

If you agree, disagree, or have any comments, use the Share button above to send me a reply!